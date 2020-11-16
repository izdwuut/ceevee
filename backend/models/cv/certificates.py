from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator


class CertificateModel(models.Model):
    id = fields.UUIDField(pk=True)
    certificate = fields.CharField(max_length=255, null=True)
    issuer = fields.CharField(max_length=255, null=True)

    cv = fields.ForeignKeyField('models.CVModel', related_name='certificates')

    class Meta:
        table = 'certificates'


Certificate_Update_In_Pydantic = pydantic_model_creator(
    CertificateModel,
    name='CertificateUpdateIn',
    exclude=['id', 'cv']
)
Certificate_Out_Pydantic = pydantic_model_creator(CertificateModel, name='CertificateOut', exclude=['cv'])
