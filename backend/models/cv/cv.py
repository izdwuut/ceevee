from tortoise import fields, models


class CV(models.Model):
    id = fields.UUIDField(pk=True)
    details: fields.OneToOneRelation = fields.OneToOneField('models.CV')

    class Meta:
        table = 'cvs'
