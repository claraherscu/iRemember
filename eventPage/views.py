from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from eventPage import models
from django.core import serializers
from django.utils import timezone


def index(request):
    # return HttpResponse("response for example")
    html = "<html><body><a href='http://127.0.0.1:8000/eventPage/getTodaysEvents/?ID=302184452'>get " \
           "events</a></body></html>"
    return HttpResponse(html)


def get_next_events_list(request):
    ID = request.GET.get('ID',0)
    events = models.get24HourEvents(ID)
    events_json = serializers.serialize("json", events)
    response = JsonResponse(events_json, safe=False)
    response.__setitem__('Access-Control-Allow-Origin', '*')
    response.__setitem__('Access-Control-Allow-Credentials', 'true')
    response.__setitem__('Access-Control-Allow-Methods', 'GET, POST')
    return response


def add_new_event(request):
    time = request.GET.get('time', timezone.now())
    name = request.GET.get('name', '')
    comment = request.GET.get('comment', '')
    sound = request.GET.get('sound', '')
    picture = request.GET.get('picture', '')
    recurrence = request.GET.get('recurrence', '')
    user = request.GET.get('user', 0)
    models.newEvent(time, name, comment, sound, picture, recurrence, user)
    response = HttpResponse('')
    response.__setitem__('Access-Control-Allow-Origin', '*')
    response.__setitem__('Access-Control-Allow-Credentials', 'true')
    response.__setitem__('Access-Control-Allow-Methods', 'GET, POST')
    return response


def add_new_group_event(request):
    userGroup = request.GET.get('userGroup', '')
    time = request.GET.get('time', timezone.now())
    name = request.GET.get('name', '')
    comment = request.GET.get('comment', '')
    sound = request.GET.get('sound', '')
    picture = request.GET.get('picture', '')
    recurrence = request.GET.get('recurrence', '')
    models.newUserGroupEvent(userGroup, time, name, comment, sound, picture, recurrence)
    response = HttpResponse('')
    response.__setitem__('Access-Control-Allow-Origin', '*')
    response.__setitem__('Access-Control-Allow-Credentials', 'true')
    response.__setitem__('Access-Control-Allow-Methods', 'GET, POST')
    return response


def create_new_group(request):
    groupName = request.GET.get('groupName', '')
    users_list = request.GET.getlist('ID')
    for user in users_list:
        models.addNewGroup(groupName, user)
    response = HttpResponse('')
    response.__setitem__('Access-Control-Allow-Origin', '*')
    response.__setitem__('Access-Control-Allow-Credentials', 'true')
    response.__setitem__('Access-Control-Allow-Methods', 'GET, POST')
    return response


def create_new_user(request):
    tz = request.GET.get('ID', 0)
    name = request.GET.get('name', '')
    models.addNewUser(tz, name)
    response = HttpResponse('')
    response.__setitem__('Access-Control-Allow-Origin', '*')
    response.__setitem__('Access-Control-Allow-Credentials', 'true')
    response.__setitem__('Access-Control-Allow-Methods', 'GET, POST')
    return response
