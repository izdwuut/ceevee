from fastapi import APIRouter
from models.cv.experience import ExperienceModel, Experience_Update_Pydantic, Experience_Pydantic
from pydantic import UUID4

experience_router = APIRouter()


@experience_router.patch("/{experience_id}")
async def patch_experience(experience_id: UUID4, experience: Experience_Update_Pydantic):
    experience_orm = await ExperienceModel.get(id=experience_id)
    await experience_orm.update_from_dict(experience.dict(exclude_unset=True)).save()
    return await Experience_Update_Pydantic.from_tortoise_orm(experience_orm)


