from fastapi import APIRouter
from models.cv.details import DetailsModel, Details_Update_Out_Pydantic, Details_Update_In_Pydantic
from pydantic import UUID4
from services import rest

details_router = APIRouter()
PREFIX = '/details'


@details_router.patch(PREFIX + "/{cv_id}/details", response_model=Details_Update_Out_Pydantic)
async def patch_details(cv_id: UUID4, details: Details_Update_In_Pydantic) -> Details_Update_Out_Pydantic:
    return await rest.patch_item(DetailsModel, details, Details_Update_Out_Pydantic, cv_id)


