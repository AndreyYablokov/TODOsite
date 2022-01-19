from rest_framework.test import APITestCase, APILiveServerTestCase
from rest_framework import status
from rest_framework.test import RequestsClient

from mixer.backend.django import mixer
from requests.auth import HTTPBasicAuth

from users.models import User
from todo.models import ToDo, Project


class TestToDoAPI(APITestCase):

    def setUp(self):
        self.admin = User.objects.create_superuser('root', 'root@TODOsite.ru', 'admin123456')
        self.todo = mixer.blend(ToDo)

    def test_get_list(self):
        response = self.client.get('/api/todos/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_partial_update_mixer(self):
        self.client.login(username='root', password='admin123456')
        response = self.client.patch(f'/api/todos/{self.todo.id}/', {'task': 'Выполнить рефакторинг кода'},
                                     format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.get(f'/api/todos/{self.todo.id}/')
        self.assertEqual(response.data['task'], 'Выполнить рефакторинг кода')


class LiveTestProjectAPI(APITestCase):

    def setUp(self):
        self.client = RequestsClient()

    def test_get_list_guest(self):
        response = self.client.get('http://127.0.0.1:8000/api/projects/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
