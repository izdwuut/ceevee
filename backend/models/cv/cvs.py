from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator, pydantic_queryset_creator
from tortoise import Tortoise
from config.settings import Settings

settings = Settings()


class CVModel(models.Model):
    id = fields.UUIDField(pk=True)

    user = fields.ForeignKeyField('models.UserModel', related_name='cvs')

    class Meta:
        table = 'cvs'


Tortoise.init_models(settings.MODELS, "models")

CV_Pydantic = pydantic_model_creator(CVModel)
CV_List_Pydantic = pydantic_model_creator(CVModel, include=('id',))
CV_Add_Pydantic = pydantic_model_creator(CVModel, include=('id',))
