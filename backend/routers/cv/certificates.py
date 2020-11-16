from fastapi import APIRouter
from models.cv.certificates import \
    CertificateModel, \
    Certificate_Update_In_Pydantic, \
    Certificate_Out_Pydantic
from pydantic import UUID4
from services import rest

certificates_router = APIRouter()
PREFIX = '/certificate'


@certificates_router.patch(PREFIX + "/{certificate_id}", response_model=Certificate_Out_Pydantic)
async def patch_certificate(
        certificate_id: UUID4,
        certificates: Certificate_Update_In_Pydantic
) -> Certificate_Out_Pydantic:
    return await rest.patch_item(CertificateModel, certificates, Certificate_Out_Pydantic, certificate_id)


@certificates_router.delete(PREFIX + '/{certificate_id}')
async def delete_certificate(certificate_id: UUID4) -> None:
    await rest.delete_item(CertificateModel, certificate_id)


@certificates_router.post("/{cv_id}/certificate", response_model=Certificate_Out_Pydantic)
async def add_certificate(cv_id: UUID4) -> Certificate_Out_Pydantic:
    return await rest.post_item(CertificateModel, Certificate_Out_Pydantic, cv_id)
