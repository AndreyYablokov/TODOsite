from django.test import TestCase
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APITestCase
from rest_framework import status

from users.views import UserViewSet
from users.models import User


class TestUserViewSet(TestCase):

    def setUp(self):
        self.admin = User.objects.create_superuser('root', 'root@TODOsite.ru', 'admin123456')
        self.user = User.objects.create(username='Andrey_Yablokov', password='qwerty123456!',
                                        first_name='Andrey', last_name='Yablokov', email='Andrey_Yablokov@TODOsite.ru')
        self.factory = APIRequestFactory()
        self.client = APIClient()

    def test_get_list(self):
        request = self.factory.get('/api/users/')
        view = UserViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_user(self):
        request = self.factory.get(f'/api/users/')
        view = UserViewSet.as_view({'get': 'retrieve'})
        response = view(request, pk=self.user.id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_partial_update_admin(self):
        request = self.factory.patch(f'/api/users/{self.user.id}/', {'first_name': 'Alex'}, format='json')
        view = UserViewSet.as_view({'patch': 'partial_update'})
        force_authenticate(request, self.admin)
        response = view(request, pk=self.user.id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        request = self.factory.get(f'/api/users/')
        view = UserViewSet.as_view({'get': 'retrieve'})
        response = view(request, pk=self.user.id)
        self.assertEqual(response.data['first_name'], 'Alex')

    def test_partial_update_guest(self):
        response = self.client.put(f'/api/users/{self.user.id}/', {'first_name': 'Alex'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

