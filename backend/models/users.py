from fastapi_users import models
from fastapi_users.db import TortoiseBaseUserModel, TortoiseUserDatabase
from typing import Optional
from datetime import date


class User(models.BaseUser):
    first_name: str
    middle_name: Optional[str]
    last_name: str
    mobile: Optional[str]
    country: Optional[str]
    city: Optional[str]
    driving_license: Optional[str]
    birth_date: date


class UserCreate(models.BaseUserCreate):
    pass


class UserUpdate(User, models.BaseUserUpdate):
    pass


class UserDB(User, models.BaseUserDB):
    pass


class UserModel(TortoiseBaseUserModel):
    class Meta:
        table: str = 'users'


user_db = TortoiseUserDatabase(UserDB, UserModel)
