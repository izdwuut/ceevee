from fastapi import APIRouter
from models.cv.projects import \
    ProjectModel, \
    Project_Update_In_Pydantic, \
    Project_Out_Pydantic
from pydantic import UUID4
from services import rest

projects_router = APIRouter()
PREFIX = '/projects'


@projects_router.patch(PREFIX + "/{projects_id}", response_model=Project_Out_Pydantic)
async def patch_project(
        projects_id: UUID4,
        projects: Project_Update_In_Pydantic
) -> Project_Out_Pydantic:
    return await rest.patch(ProjectModel, projects, Project_Out_Pydantic, projects_id)


@projects_router.delete(PREFIX + '/{projects_id}')
async def delete_project(projects_id: UUID4) -> None:
    await ProjectModel.get(id=projects_id).delete()


@projects_router.post("/{cv_id}/projects", response_model=Project_Out_Pydantic)
async def add_project(cv_id: UUID4) -> Project_Out_Pydantic:
    projects_orm = await ProjectModel.create(cv_id=cv_id)
    return await Project_Out_Pydantic.from_tortoise_orm(projects_orm)
