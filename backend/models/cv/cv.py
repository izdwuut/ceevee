from tortoise import fields, models


class CV(models.Model):
    id = fields.UUIDField(pk=True)
    details = fields.OneToOneField('models.Details')
