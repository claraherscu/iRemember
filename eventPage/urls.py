from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'getTodaysEvents/$', views.get_next_events_list, name='events_list'),
    url(r'^$', views.index, name='index'),
]
