from config.settings import get_settings

settings = get_settings()

DB_CONFIG = {
    "connections": {
        "default": {
            "engine": "tortoise.backends.asyncpg",
            "credentials": {
                "host": settings.DATABASE_HOST,
                "port": settings.DATABASE_PORT,
                "user": settings.DATABASE_USER,
                "password": settings.DATABASE_PASSWORD,
                "database": settings.DATABASE_NAME
            }
        }
    },
    "apps": {
        "models": {
            "models": [
                "models.users",
                "models.cv.details",
                "models.cv.cv",
                "models.cv.experience",
                "models.cv.education",
                "models.cv.projects"
            ],
            "default_connection": "default",
        }
    }
}