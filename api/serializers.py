from rest_framework import serializers
from .models import Todo

class todoSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Todo
		fields = ('url','id','title','priority')