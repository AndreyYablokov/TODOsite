from django_filters import rest_framework as filters
from todo.models import Project, ToDo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class ToDoFilter(filters.FilterSet):
    created_timestamp = filters.IsoDateTimeFilter(field_name="created_timestamp", lookup_expr='gte')
    updated_timestamp = filters.IsoDateTimeFilter(field_name="updated_timestamp", lookup_expr='lte')

    class Meta:
        model = ToDo
        fields = ['project', 'created_timestamp', 'updated_timestamp']
