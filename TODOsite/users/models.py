from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return f'{self.username} | {self.first_name} {self.last_name}'

    def safe_delete(self):
        self.is_active = False
        self.save()
