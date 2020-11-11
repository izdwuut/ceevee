from fastapi import APIRouter
from models.users import User_Pydantic, User
router = APIRouter()


@router.get('/')
async def get_users():
    user = User(id=1, user_name='Lorem ipsum')
    return await User_Pydantic.from_tortoise_orm(user)
