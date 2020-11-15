from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator


class ExperienceModel(models.Model):
    id = fields.UUIDField(pk=True)
    position = fields.CharField(max_length=255, null=True)
    company = fields.CharField(max_length=255, null=True)
    city = fields.CharField(max_length=255, null=True)
    country = fields.CharField(max_length=255, null=True)
    from_date = fields.DateField(null=True)
    to_date = fields.DateField(null=True)
    description = fields.data.TextField(null=True)

    cv = fields.ForeignKeyField('models.CVModel', related_name='experience')

    class Meta:
        table = 'experience'


Experience_Create_Out_Pydantic = pydantic_model_creator(ExperienceModel, name='ExperienceCreateOut', exclude=['cv'])
Experience_Update_In_Pydantic = pydantic_model_creator(ExperienceModel, name='ExperienceUpdateIn', exclude=['id', 'cv'])
Experience_Update_Out_Pydantic = pydantic_model_creator(ExperienceModel, name='ExperienceUpdateOut', exclude=['cv'])

