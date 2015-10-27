from django.contrib.auth.models import User
from rest_framework import permissions, renderers, viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from api.models import Todo
from api.serializers import todoSerializer

class todoViewSet(viewsets.ModelViewSet):
	queryset = Todo.objects.all()
	serializer_class = todoSerializer
	