from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator, pydantic_queryset_creator
from tortoise import Tortoise


class CVModel(models.Model):
    id = fields.UUIDField(pk=True)

    user = fields.ForeignKeyField('models.UserModel', related_name='cvs')

    class Meta:
        table = 'cvs'


Tortoise.init_models(['models.cv.cv', 'models.users', 'models.cv.details'], "models")

CV_Pydantic_List = pydantic_queryset_creator(CVModel)
CV_Pydantic = pydantic_model_creator(CVModel)
