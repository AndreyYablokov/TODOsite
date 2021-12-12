from django.db import models

from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=64, unique=True)
    repository = models.CharField(max_length=256, blank=True, null=True)
    users = models.ManyToManyField(User)


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    task = models.CharField(max_length=256)
    description = models.TextField(blank=True, null=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    updated_timestamp = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

