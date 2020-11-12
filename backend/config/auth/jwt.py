from config.auth.jwt_authentication import JWTAuthentication
from config.settings import get_settings

settings = get_settings()

auth_backends = []

jwt_authentication = JWTAuthentication(
    secret=settings.SECRET_KEY,
    lifetime_seconds=settings.TOKEN_LIFETIME,
    refresh_token_lifetime_seconds=settings.REFRESH_TOKEN_LIFETIME
)

auth_backends.append(jwt_authentication)
