from django.db import models

# Create your models here.
class Todo(models.Model):
	title = models.CharField(max_length=75)
	priority = models.IntegerField()

	def __unicode_(self):
		return self.title