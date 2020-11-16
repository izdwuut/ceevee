from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator
from tortoise import Tortoise
from config.settings import Settings

settings = Settings()


class CVModel(models.Model):
    id = fields.UUIDField(pk=True)
    name = fields.CharField(max_length=255, null=True)
    gdpa = fields.TextField(null=True)

    user = fields.ForeignKeyField('models.UserModel', related_name='cvs')

    class Meta:
        table = 'cvs'


Tortoise.init_models(settings.MODELS, "models")

CV_Get_Out_Pydantic = pydantic_model_creator(CVModel, name='CVGetOut')
CV_List_Item_Out_Pydantic = pydantic_model_creator(CVModel, include=('id', 'name'), name='CVListItemOut')
Cv_Add_Out_Pydantic = pydantic_model_creator(CVModel, include=('id', 'name'), name='CVAddOut')
