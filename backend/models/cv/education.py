from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator


class EducationModel(models.Model):
    id = fields.UUIDField(pk=True)
    course = fields.CharField(max_length=255, null=True)
    school = fields.CharField(max_length=255, null=True)
    title = fields.CharField(max_length=255, null=True)
    city = fields.CharField(max_length=255, null=True)
    country = fields.CharField(max_length=255, null=True)
    from_date = fields.DateField(null=True)
    to_date = fields.DateField(null=True)
    description = fields.data.TextField(null=True)

    cv = fields.ForeignKeyField('models.CVModel', related_name='education')

    class Meta:
        table = 'education'


Education_Update_In_Pydantic = pydantic_model_creator(
    EducationModel,
    name='EducationUpdateIn',
    exclude=['id', 'cv']
)
Education_Out_Pydantic = pydantic_model_creator(EducationModel, name='EducationOut', exclude=['cv'])

