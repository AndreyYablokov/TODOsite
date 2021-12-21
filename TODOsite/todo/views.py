from rest_framework.viewsets import ModelViewSet

from todo.models import Project
from todo.models import ToDo
from todo.serializers import ProjectModelSerializer
from todo.serializers import ToDoModelSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
