from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination

from todo.models import Project
from todo.models import ToDo
from todo.serializers import ProjectModelSerializer
from todo.serializers import ToDoModelSerializer
from todo.filters import ProjectFilter


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
