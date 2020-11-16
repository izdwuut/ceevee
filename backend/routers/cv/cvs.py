from fastapi import APIRouter
from pydantic import UUID4
from models.cv.cvs import CVModel, CV_Get_Out_Pydantic, CV_List_Item_Out_Pydantic, Cv_Add_Out_Pydantic
from models.cv.details import DetailsModel

cv_router = APIRouter()


@cv_router.get("/{cv_id}")
async def get_cv(cv_id: UUID4):
    cv = await CVModel.get(id=cv_id)
    return await CV_Get_Out_Pydantic.from_tortoise_orm(cv)


@cv_router.get("/")
async def get_cvs(user_id: UUID4):
    cvs_orm = await CVModel.filter(user_id=user_id)
    cvs = []
    for cv in cvs_orm:
        cvs.append(await CV_List_Item_Out_Pydantic.from_tortoise_orm(cv))
    return cvs


@cv_router.post("/{user_id}")
async def add_cv(user_id: UUID4):
    cv = await CVModel.create(user_id=user_id)
    await DetailsModel.create(cv_id=cv.id)
    return await Cv_Add_Out_Pydantic.from_tortoise_orm(cv)




