from fastapi_users import FastAPIUsers
from models import users
from config.auth.jwt import auth_backends

fastapi_users = FastAPIUsers(
    users.user_db,
    auth_backends,
    users.User,
    users.UserCreate,
    users.UserUpdate,
    users.UserDB,
)
