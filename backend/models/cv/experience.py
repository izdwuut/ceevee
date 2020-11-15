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

    cv = fields.ForeignKeyField('models.CVModel', related_name='experience')

    class Meta:
        table = 'experience'


Experience_Pydantic = pydantic_model_creator(ExperienceModel)
Experience_Update_Pydantic = pydantic_model_creator(ExperienceModel)

