from fastapi import APIRouter
from pydantic import UUID4
from models.cv.cv import CVModel, CV_Pydantic, CV_Add_Pydantic, CV_List_Pydantic
from models.cv.details import DetailsModel
from models.cv.experience import ExperienceModel, Experience_Pydantic

cv_router = APIRouter()


@cv_router.get("/{cv_id}")
async def get_cv(cv_id: UUID4):
    cv = await CVModel.get(id=cv_id)
    return await CV_Pydantic.from_tortoise_orm(cv)


@cv_router.get("/")
async def get_cvs(user_id: UUID4):
    cvs_orm = await CVModel.filter(user_id=user_id)
    cvs = []
    # cvs_orm =
    for cv in cvs_orm:

        cvs.append(await CV_List_Pydantic.from_tortoise_orm(cv))
    return cvs


@cv_router.post("/{user_id}")
async def add_cv(user_id: UUID4):
    cv = await CVModel.create(user_id=user_id)
    await DetailsModel.create(cv_id=cv.id)
    return await CV_Add_Pydantic.from_tortoise_orm(cv)


@cv_router.post("/{cv_id}/experience", tags=['experience'])
async def add_experience(cv_id: UUID4, experience: Experience_Pydantic):
    experience_orm: ExperienceModel = await ExperienceModel.create(cv_id=cv_id)
    await experience_orm.update_from_dict(experience.dict(exclude_unset=True)).save()
    return await Experience_Pydantic.from_tortoise_orm(experience_orm)

