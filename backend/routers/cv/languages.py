from fastapi import APIRouter
from models.cv.languages import \
    LanguageModel, \
    Language_Update_In_Pydantic, \
    Language_Out_Pydantic
from pydantic import UUID4
from services import rest

languages_router = APIRouter()
PREFIX = '/language'


@languages_router.patch(PREFIX + "/{languages_id}", response_model=Language_Out_Pydantic)
async def patch_language(
        language_id: UUID4,
        languages: Language_Update_In_Pydantic
) -> Language_Out_Pydantic:
    return await rest.patch_item(LanguageModel, languages, Language_Out_Pydantic, language_id)


@languages_router.delete(PREFIX + '/{languages_id}')
async def delete_language(language_id: UUID4) -> None:
    await rest.delete_item(LanguageModel, language_id)


@languages_router.post("/{cv_id}/languages", response_model=Language_Out_Pydantic)
async def add_language(cv_id: UUID4) -> Language_Out_Pydantic:
    return await rest.post_item(LanguageModel, Language_Out_Pydantic, cv_id)
