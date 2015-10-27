from api import views
from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter
from django.views.generic.base import RedirectView
from django.views.generic import TemplateView

router = DefaultRouter(trailing_slash=False)
router.register(r'todos', views.todoViewSet)

urlpatterns = patterns('',
	url(r'^$', TemplateView.as_view(template_name='base.html'), name='base'),
	##url(r'^$', RedirectView.as_view(url="/templaet/base.html")),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
)