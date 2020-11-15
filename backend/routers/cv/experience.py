from fastapi import APIRouter
from models.cv.experience import ExperienceModel, Experience_Pydantic, Experience_Update_Pydantic
from pydantic import UUID4


experience_router = APIRouter()
PREFIX = '/experience'


@experience_router.patch(PREFIX + "/{experience_id}")
async def patch_experience(experience_id: UUID4, experience: Experience_Update_Pydantic):
    experience_orm = await ExperienceModel.get(id=experience_id)
    await experience_orm.update_from_dict(experience.dict(exclude_unset=True))
    await experience_orm.save()
    return await Experience_Update_Pydantic.from_tortoise_orm(experience_orm)


@experience_router.delete(PREFIX + '/{experience_id}')
async def delete_experience(experience_id: UUID4):
    await ExperienceModel.get(id=experience_id).delete()


@experience_router.post("/{cv_id}/experience", tags=['experience'])
async def add_experience(cv_id: UUID4, experience: Experience_Pydantic):
    experience_orm: ExperienceModel = await ExperienceModel.create(cv_id=cv_id)
    await experience_orm.update_from_dict(experience.dict()).save()
    return await Experience_Pydantic.from_tortoise_orm(experience_orm)