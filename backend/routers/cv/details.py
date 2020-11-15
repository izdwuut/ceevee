from fastapi import APIRouter
from models.cv.details import DetailsModel, Details_Update_Out_Pydantic, Details_Update_In_Pydantic
from pydantic import UUID4

details_router = APIRouter()
PREFIX = '/details'


@details_router.patch(PREFIX + "/{cv_id}/details", response_model=Details_Update_Out_Pydantic)
async def patch_details(cv_id: UUID4, details: Details_Update_In_Pydantic) -> Details_Update_Out_Pydantic:
    details_orm = await DetailsModel.get(cv_id=cv_id)
    await details_orm.update_from_dict(details.dict(exclude_unset=True)).save()
    return await Details_Update_Out_Pydantic.from_tortoise_orm(details_orm)

