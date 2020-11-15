from fastapi import APIRouter
from models.cv.education import \
    EducationModel, \
    Education_Update_In_Pydantic, \
    Education_Out_Pydantic
from pydantic import UUID4

education_router = APIRouter()
PREFIX = '/education'


@education_router.patch(PREFIX + "/{education_id}", response_model=Education_Update_In_Pydantic)
async def patch_education(
        education_id: UUID4,
        education: Education_Update_In_Pydantic
) -> Education_Out_Pydantic:
    education_orm = await EducationModel.get(id=education_id)
    await education_orm.update_from_dict(education.dict(exclude_unset=True)).save()
    return await Education_Out_Pydantic.from_tortoise_orm(education_orm)


@education_router.delete(PREFIX + '/{education_id}')
async def delete_education(education_id: UUID4) -> None:
    await EducationModel.get(id=education_id).delete()


@education_router.post("/{cv_id}/education", response_model=Education_Out_Pydantic)
async def add_education(cv_id: UUID4) -> Education_Out_Pydantic:
    education_orm = await EducationModel.create(cv_id=cv_id)
    return await Education_Out_Pydantic.from_tortoise_orm(education_orm)
