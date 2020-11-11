from functools import lru_cache
from pydantic import BaseSettings


class Settings(BaseSettings):
    DATABASE_USER: str
    DATABASE_PASSWORD: str
    DATABASE_HOST: str
    DATABASE_PORT: str
    DATABASE_NAME: str

    APP_NAME: str = 'Create.CV'

    class Config:
        env_prefix: str = 'CREATE_CV_'
        case_sensitive: bool = True


@lru_cache()
def get_settings():
    return Settings()
