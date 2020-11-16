from fastapi import APIRouter
from models.cv.experience import \
    ExperienceModel, \
    Experience_Update_In_Pydantic, \
    Experience_Out_Pydantic
from pydantic import UUID4
from services import rest

experience_router = APIRouter()
PREFIX = '/experience'


@experience_router.patch(PREFIX + "/{experience_id}", response_model=Experience_Out_Pydantic)
async def patch_experience(
        experience_id: UUID4,
        experience: Experience_Update_In_Pydantic
) -> Experience_Out_Pydantic:
    return await rest.patch_item(ExperienceModel, experience, Experience_Out_Pydantic, experience_id)


@experience_router.delete(PREFIX + '/{experience_id}')
async def delete_experience(experience_id: UUID4) -> None:
    await rest.delete_item(ExperienceModel, experience_id)


@experience_router.post("/{cv_id}/experience", response_model=Experience_Out_Pydantic)
async def add_experience(cv_id: UUID4) -> Experience_Out_Pydantic:
    return await rest.post_item(ExperienceModel, Experience_Out_Pydantic, cv_id)