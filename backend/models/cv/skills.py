from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator


class SkillModel(models.Model):
    id = fields.UUIDField(pk=True)
    skill = fields.CharField(max_length=255, null=True)
    description = fields.CharField(max_length=255, null=True)

    cv = fields.ForeignKeyField('models.CVModel', related_name='skills')

    class Meta:
        table = 'skills'


Skill_Update_In_Pydantic = pydantic_model_creator(
    SkillModel,
    name='SkillUpdateIn',
    exclude=['id', 'cv']
)
Skill_Out_Pydantic = pydantic_model_creator(SkillModel, name='SkillOut', exclude=['cv'])

