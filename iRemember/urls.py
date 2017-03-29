"""iRemember URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from eventPage import views

urlpatterns = [
    url(r'^eventPage/getTodaysEvents/', views.get_next_events_list, name='events_list'),
    url(r'^eventPage/newGroup/', views.create_new_group, name='newGroup'),
    url(r'^eventPage/newUser/', views.create_new_user, name='newUser'),
    url(r'^eventPage/newEvent/', views.add_new_event, name='addNewEvent'),
    url(r'^eventPage/deleteEvent/', views.delete_event, name='deleteEvent'),
    url(r'^eventPage/newGroupEvent/', views.add_new_group_event, name='addNewGroupEvent'),
    url(r'^eventPage/getAllUsers/', views.get_all_users, name='getAllUsers'),
    url(r'^eventPage/', views.index, name='index'),
    url(r'^admin/', admin.site.urls),
]
