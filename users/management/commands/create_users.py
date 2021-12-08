from django.core.management.base import BaseCommand

from users.models import User


class Command(BaseCommand):
    help = 'Create superuser and users'

    def handle(self, *args, **options):
        User.objects.create_superuser(username='root', email='root@TODOsite.ru', password='12358')
        User.objects.create_user(username='Andrey', email='andrey@TODOsite.ru', password='12358')
        User.objects.create_user(username='Tanya', email='tanya@TODOsite.ru', password='12358')
        User.objects.create_user(username='Alex', email='alex@TODOsite.ru', password='12358')
