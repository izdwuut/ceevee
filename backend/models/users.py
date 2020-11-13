from fastapi_users import models
from fastapi_users.db import TortoiseBaseUserModel, TortoiseUserDatabase
from typing import Optional
from datetime import date
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator


class User(models.BaseUser):
    first_name: str
    middle_name: Optional[str]
    last_name: str
    mobile: Optional[str]
    country: Optional[str]
    city: Optional[str]
    driving_license: Optional[str]
    birth_date: Optional[date]


class UserCreate(models.BaseUserCreate):
    first_name: str
    last_name: str


class UserUpdate(User, models.BaseUserUpdate):
    pass


class UserDB(User, models.BaseUserDB):
    pass


class UserModel(TortoiseBaseUserModel):
    first_name = fields.CharField(null=False, max_length=255)
    middle_name = fields.CharField(null=True, max_length=255)
    last_name = fields.CharField(null=False, max_length=255)
    mobile = fields.CharField(null=True, max_length=255)
    country = fields.CharField(null=True, max_length=255)
    city = fields.CharField(null=True, max_length=255)
    driving_license = fields.CharField(null=True, max_length=255)
    birth_date = fields.DateField(null=True)

    class Meta:
        table: str = 'users'


user_db = TortoiseUserDatabase(UserDB, UserModel)
User_Pydantic = pydantic_model_creator(UserModel, exclude=('id', 'hashed_password', 'is_active', 'is_superuser'))
