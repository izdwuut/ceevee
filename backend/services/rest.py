from pydantic import UUID4
from typing import TypeVar, Type
from tortoise import models
from tortoise.contrib.pydantic import PydanticModel

T = TypeVar('T', bound=PydanticModel)


async def patch_item(model: Type[models.Model], model_in: PydanticModel, model_out: T, id: UUID4) -> T:
    orm_model = await model.get(id=id)
    await orm_model.update_from_dict(model_in.dict(exclude_unset=True)).save()
    return await model_out.from_tortoise_orm(orm_model)


async def delete_item(model: Type[models.Model], id: UUID4) -> None:
    await model.get(id=id).delete()


async def post_item(model: Type[models.Model], model_out: T, cv_id: UUID4) -> T:
    orm_model = await model.create(cv_id=cv_id)
    return await model_out.from_tortoise_orm(orm_model)
