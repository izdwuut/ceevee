from typing import Any
from fastapi_users.authentication import JWTAuthentication as BaseAuth
from fastapi_users.models import BaseUserDB
from starlette.responses import Response
from fastapi_users.utils import JWT_ALGORITHM, generate_jwt
import datetime


class JWTAuthentication(BaseAuth):
    refresh_token_lifetime_seconds: int

    def __init__(
        self,
        secret: str,
        lifetime_seconds: int,
        refresh_token_lifetime_seconds: int,
        token_url: str = "/login",
        name: str = "jwt",
    ):
        super().__init__(secret, lifetime_seconds, token_url, name)
        self.refresh_token_lifetime_seconds = refresh_token_lifetime_seconds

    async def get_login_response(self, user: BaseUserDB, response: Response) -> Any:
        access_token = await self._generate_token(self.lifetime_seconds, user)
        refresh_token = await self._generate_token(self.refresh_token_lifetime_seconds, user)
        return {"access_token": access_token, "refresh_token": refresh_token, "token_type": "bearer"}

    async def _generate_token(self, lifetime: int, user: BaseUserDB) -> str:
        data = {
            "user_id": str(user.id),
            "aud": self.token_audience,
            "exp": str((datetime.datetime.now() + datetime.timedelta(seconds=lifetime)).timestamp())
        }
        return generate_jwt(data, lifetime, self.secret, JWT_ALGORITHM)

