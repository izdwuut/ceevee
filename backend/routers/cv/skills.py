from fastapi import APIRouter
from models.cv.skills import \
    SkillModel, \
    Skill_Update_In_Pydantic, \
    Skill_Out_Pydantic
from pydantic import UUID4
from services import rest

skills_router = APIRouter()
PREFIX = '/skills'


@skills_router.patch(PREFIX + "/{skills_id}", response_model=Skill_Out_Pydantic)
async def patch_skill(
        skill_id: UUID4,
        skills: Skill_Update_In_Pydantic
) -> Skill_Out_Pydantic:
    return await rest.patch_item(SkillModel, skills, Skill_Out_Pydantic, skill_id)


@skills_router.delete(PREFIX + '/{skills_id}')
async def delete_skill(skill_id: UUID4) -> None:
    await rest.delete_item(SkillModel, skill_id)


@skills_router.post("/{cv_id}/skills", response_model=Skill_Out_Pydantic)
async def add_skill(cv_id: UUID4) -> Skill_Out_Pydantic:
    return await rest.post_item(SkillModel, Skill_Out_Pydantic, cv_id)
