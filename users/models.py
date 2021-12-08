from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(unique=True)

    def safe_delete(self):
        self.is_active = False
        self.save()
