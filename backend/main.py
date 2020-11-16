from fastapi import FastAPI
from routers.users import fastapi_users
from tortoise.contrib.fastapi import register_tortoise
from config.db import DB_CONFIG
from config.settings import Settings
from config.auth.jwt import jwt_authentication
import uvicorn
from routers.cv import \
    cvs, \
    details, \
    experience, \
    education, \
    projects, \
    skills, \
    languages

settings = Settings()
app = FastAPI(title=settings.APP_NAME)
CVS_PREFIX = '/cv'

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
        tags=['Auth'],
    )

routers = [
    (cvs.cv_router, ['Cvs']),
    (details.details_router, ['Details']),
    (experience.experience_router, ['Experience']),
    (education.education_router, ['Education']),
    (projects.projects_router, ['Projects']),
    (skills.skills_router, ['Skills']),
    (languages.languages_router, ['Languages']),
]

for router in routers:
    app.include_router(
        router[0],
        prefix=settings.API_PREFIX + CVS_PREFIX,
        tags=router[1],
    )


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)
