from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator


class HobbyModel(models.Model):
    id = fields.UUIDField(pk=True)
    hobby = fields.CharField(max_length=255, null=True)
    description = fields.CharField(max_length=255, null=True)

    cv = fields.ForeignKeyField('models.CVModel', related_name='hobbies')

    class Meta:
        table = 'hobbies'


Hobby_Update_In_Pydantic = pydantic_model_creator(
    HobbyModel,
    name='HobbyUpdateIn',
    exclude=['id', 'cv']
)
Hobby_Out_Pydantic = pydantic_model_creator(HobbyModel, name='HobbyOut', exclude=['cv'])

