from pydantic import UUID4
from typing import TypeVar
from tortoise import models
from tortoise.contrib.pydantic import PydanticModel

T = TypeVar('T', bound=PydanticModel)


async def patch(model: models.Model, model_in: PydanticModel, model_out: T, id: UUID4) -> T:
    orm_model = await model.get(id=id)
    await orm_model.update_from_dict(model_in.dict(exclude_unset=True)).save()
    return await model_out.from_tortoise_orm(orm_model)
