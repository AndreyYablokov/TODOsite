from rest_framework.viewsets import ModelViewSet
from users.models import User
from users.serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = User.objets.all()
    serializer_class = UserModelSerializer
