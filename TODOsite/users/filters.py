from django_filters import rest_framework as filters
from users.models import User


class UserFilter(filters.FilterSet):
    username = filters.CharFilter(lookup_expr='iexact')

    class Meta:
        model = User
        fields = ['username']