from tortoise import fields, models


class Details(models.Model):
    id = fields.UUIDField(pk=True)
    email = fields.BooleanField(null=False, default=False)
    first_name = fields.BooleanField(null=False, default=False)
    middle_name = fields.BooleanField(null=False, default=False)
    last_name = fields.BooleanField(null=False, default=False)
    mobile = fields.BooleanField(null=False, default=False)
    country = fields.BooleanField(null=False, default=False)
    city = fields.BooleanField(null=False, default=False)
    driving_license = fields.BooleanField(null=False, default=False)
    birth_date = fields.BooleanField(null=False, default=False)
    position: fields.CharField(null=True, max_length=255)

