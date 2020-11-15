from fastapi import APIRouter
from models.cv.experience import \
    ExperienceModel, \
    Experience_Update_In_Pydantic, \
    Experience_Out_Pydantic
from pydantic import UUID4
from services.patch import patch

experience_router = APIRouter()
PREFIX = '/experience'


@experience_router.patch(PREFIX + "/{experience_id}", response_model=Experience_Out_Pydantic)
async def patch_experience(
        experience_id: UUID4,
        experience: Experience_Update_In_Pydantic
) -> Experience_Out_Pydantic:
    return await patch(ExperienceModel, experience, Experience_Out_Pydantic, experience_id)


@experience_router.delete(PREFIX + '/{experience_id}')
async def delete_experience(experience_id: UUID4) -> None:
    await ExperienceModel.get(id=experience_id).delete()


@experience_router.post("/{cv_id}/experience", response_model=Experience_Out_Pydantic)
async def add_experience(cv_id: UUID4) -> Experience_Out_Pydantic:
    experience_orm = await ExperienceModel.create(cv_id=cv_id)
    return await Experience_Out_Pydantic.from_tortoise_orm(experience_orm)
