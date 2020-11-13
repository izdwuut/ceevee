from fastapi import APIRouter
from models.cv.details import DetailsModel, Details_Pydantic
from pydantic import UUID4

details_router = APIRouter()


@details_router.patch("/{details_id}")
async def patch_details(details_id: UUID4, details: Details_Pydantic):
    details_orm = await DetailsModel.get(id=details_id)
    await details_orm.update_from_dict(details.dict(exclude_unset=True)).save()
    return await Details_Pydantic.from_tortoise_orm(details_orm)
