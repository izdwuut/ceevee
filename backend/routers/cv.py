from fastapi import APIRouter
from pydantic import UUID4
from models.cv.cv import CV
from models.cv.details import Details

cv_router = APIRouter()


@cv_router.get("/{cv_id}")
async def get_cv(cv_id: UUID4):
    details = await Details().create()
    return await CV().create(details=details)
