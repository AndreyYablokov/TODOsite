from rest_framework.serializers import ModelSerializer

from todo.models import Project
from todo.models import ToDo
from users.serializers import UserModelSerializer


class ProjectModelSerializer(ModelSerializer):
    users = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    project = ProjectModelSerializer()
    user = UserModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
