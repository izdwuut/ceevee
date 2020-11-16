from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator


class LanguageModel(models.Model):
    id = fields.UUIDField(pk=True)
    language = fields.CharField(max_length=255, null=True)

    cv = fields.ForeignKeyField('models.CVModel', related_name='languages')

    class Meta:
        table = 'languages'


Language_Update_In_Pydantic = pydantic_model_creator(
    LanguageModel,
    name='LanguageUpdateIn',
    exclude=['id', 'cv']
)
Language_Out_Pydantic = pydantic_model_creator(LanguageModel, name='LanguageOut', exclude=['cv'])
