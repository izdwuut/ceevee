from fastapi import FastAPI
from routers.users import fastapi_users
from tortoise.contrib.fastapi import register_tortoise
from config.db import DB_CONFIG
from config.settings import Settings
from config.auth.jwt import jwt_authentication
from routers.cv.cv import cv_router
from routers.cv.details import details_router

settings = Settings()
app = FastAPI(title=settings.APP_NAME)

register_tortoise(
    app,
    config=DB_CONFIG,
    generate_schemas=False,
    add_exception_handlers=True,
)

auth_routers = [
    fastapi_users.get_register_router(),
    fastapi_users.get_auth_router(jwt_authentication),
    fastapi_users.get_users_router(),
    fastapi_users.get_reset_password_router(settings.SECRET_KEY)
]


for router in auth_routers:
    app.include_router(
        router,
        prefix=settings.API_PREFIX + '/auth',
        tags=['auth'],
    )

app.include_router(
    cv_router,
    prefix=settings.API_PREFIX + '/cv',
    tags=['cv'],
)

app.include_router(
    details_router,
    prefix=settings.API_PREFIX + '/details',
    tags=['details'],
)

