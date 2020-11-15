from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator


class ProjectModel(models.Model):
    id = fields.UUIDField(pk=True)
    project = fields.CharField(max_length=255, null=True)
    position = fields.CharField(max_length=255, null=True)
    company = fields.CharField(max_length=255, null=True)
    city = fields.CharField(max_length=255, null=True)
    country = fields.CharField(max_length=255, null=True)
    from_date = fields.DateField(null=True)
    to_date = fields.DateField(null=True)
    description = fields.data.TextField(null=True)

    cv = fields.ForeignKeyField('models.CVModel', related_name='projects')

    class Meta:
        table = 'projects'


Project_Update_In_Pydantic = pydantic_model_creator(
    ProjectModel,
    name='ProjectsUpdateIn',
    exclude=['id', 'cv']
)
Project_Out_Pydantic = pydantic_model_creator(ProjectModel, name='ProjectsOut', exclude=['cv'])

