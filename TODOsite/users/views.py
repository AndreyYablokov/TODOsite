# from rest_framework.generics import get_object_or_404
# from rest_framework.response import Response
# from rest_framework.viewsets import ViewSet
# from rest_framework.renderers import JSONRenderer

from rest_framework.viewsets import GenericViewSet
from rest_framework import mixins

from users.models import User
from users.serializers import UserModelSerializer
from users.filters import UserFilter


class UserViewSet(GenericViewSet,
                  mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    filterset_class = UserFilter


# class UserViewSet(ViewSet):
#     renderer_classes = [JSONRenderer]
# 
#     def list(self, request):
#         users = User.objects.all()
#         serializer = UserModelSerializer(users, many=True)
#         return Response(serializer.data)
# 
#     def retrieve(self, request, pk=None):
#         user = get_object_or_404(User, pk=pk)
#         serializer = UserModelSerializer(user)
#         return Response(serializer.data)
# 
#     def update(self, request, pk=None):
#         user = get_object_or_404(User, pk=pk)
#         serializer = UserModelSerializer(user, data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)
# 
#     def partial_update(self, request, pk=None):
#         user = get_object_or_404(User, pk=pk)
#         serializer = UserModelSerializer(instance=user, data=request.data, partial=True)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)
