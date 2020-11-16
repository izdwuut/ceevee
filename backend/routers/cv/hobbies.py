from fastapi import APIRouter
from models.cv.hobbies import \
    HobbyModel, \
    Hobby_Update_In_Pydantic, \
    Hobby_Out_Pydantic
from pydantic import UUID4
from services import rest

hobbies_router = APIRouter()
PREFIX = '/hobby'


@hobbies_router.patch(PREFIX + "/{hobby_id}", response_model=Hobby_Out_Pydantic)
async def patch_hobby(
        hobby_id: UUID4,
        hobbies: Hobby_Update_In_Pydantic
) -> Hobby_Out_Pydantic:
    return await rest.patch_item(HobbyModel, hobbies, Hobby_Out_Pydantic, hobby_id)


@hobbies_router.delete(PREFIX + '/{hobby_id}')
async def delete_hobby(hobby_id: UUID4) -> None:
    await rest.delete_item(HobbyModel, hobby_id)


@hobbies_router.post("/{cv_id}/hobby", response_model=Hobby_Out_Pydantic)
async def add_hobby(cv_id: UUID4) -> Hobby_Out_Pydantic:
    return await rest.post_item(HobbyModel, Hobby_Out_Pydantic, cv_id)
