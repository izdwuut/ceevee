from functools import lru_cache
from pydantic import BaseSettings


class Settings(BaseSettings):
    DATABASE_USER: str
    DATABASE_PASSWORD: str
    DATABASE_HOST: str
    DATABASE_PORT: str
    DATABASE_NAME: str
    SECRET_KEY: str
    APP_NAME: str = 'Create.CV'
    TOKEN_LIFETIME: int = 60 * 60
    REFRESH_TOKEN_LIFETIME: int = 60 * 60 * 24
    API_PREFIX: str = '/api'
    MODELS = [
        'models.cv.cvs',
        'models.users',
        'models.cv.details',
        'models.cv.experience',
        'models.cv.education',
        'models.cv.projects',
        'models.cv.skills',
        'models.cv.languages'
    ]

    class Config:
        env_prefix: str = 'CREATE_CV_'
        case_sensitive: bool = True


@lru_cache()
def get_settings():
    return Settings()
