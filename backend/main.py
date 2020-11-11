from fastapi import FastAPI
from routers import users
from tortoise.contrib.fastapi import register_tortoise
from config.db import DB_CONFIG
from config.settings import Settings

settings = Settings()
app = FastAPI(title=settings.APP_NAME)

app.include_router(
    users.router,
    prefix='/users',
    tags=['users']
)

register_tortoise(
    app,
    config=DB_CONFIG,
    generate_schemas=True,
    add_exception_handlers=True,
)