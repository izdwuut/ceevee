from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator


class User(Model):
    id: int = fields.IntField(pk=True)
    user_name: str = fields.CharField(max_length=255, unique=True)


User_Pydantic = pydantic_model_creator(User)
