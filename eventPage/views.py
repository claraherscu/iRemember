from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from eventPage import models
from django.core import serializers
from django.utils import timezone
from dateutil import parser

indexFile = 'C:\\Users\\Daniel\\PycharmProjects\\iRemember\\files\\html\\'

def index(request):

    # path = request.path.split('/')
    # path = path[-1]
    # file = open(indexFile + path,'r')
    # html = file.read()
    # file.close()

    html = "<html><body><a href='http://192.168.1.108:8000/eventPage/getTodaysEvents/?ID=302184452'>get " \
           "events</a><br><a href='http://192.168.1.108:8000/eventPage/newGroup/?groupName=Yoga&ID=302184452&ID=203319371'>Yoga " \
           "</a><br>"\
           "<a href='http://192.168.1.108:8000/eventPage/newUser/?ID=123456789&name=מנחם ליבסקינד'>new user " \
           "</a><br>"\
           "<a href='http://192.168.1.108:8000/eventPage/newEvent/?name=תרופות&user=123456789&time=2017-01-05 14:00:00&recurrence=Day&comment=אחרי האוכל'>NEW EVENT" \
           "</a><br>"\
           "<a href='http://192.168.1.108:8000/eventPage/newGroupEvent/?userGroup=Yoga&name=TESTTESTTEST'>groupEvent " \
           "</a><br></body></html>"\
           "<a href='http://192.168.1.108:8000/eventPage/deleteEvent/?ID=1961635166'>deleteEvent " \
           "</a><br></body></html>"\
           "<a href='http://192.168.1.108:8000/eventPage/getAllUsers/'>getAllUsers " \
           "</a><br></body></html>"

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
    time = request.GET.get('time', timezone.now().strftime("%Y-%m-%d %H:%M:%S"))
    name = request.GET.get('name', '')
    comment = request.GET.get('comment', '')
    sound = request.GET.get('sound', '')
    picture = request.GET.get('picture', '')
    recurrence = request.GET.get('recurrence', '')
    user = request.GET.get('user', 0)

    # make datetime from time:
    timeDate = timezone.datetime.strptime(time, "%Y-%m-%d %H:%M:%S")

    models.newEvent(timeDate, name, comment, sound, picture, recurrence, user)
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
    city = request.GET.get('city', 'Jerusalem')
    type = request.GET.get('type', 'Old')
    models.addNewUser(tz, name, city, type)
    response = HttpResponse('')
    response.__setitem__('Access-Control-Allow-Origin', '*')
    response.__setitem__('Access-Control-Allow-Credentials', 'true')
    response.__setitem__('Access-Control-Allow-Methods', 'GET, POST')
    return response

def delete_event(request):
    id = request.GET.get('ID', 0)
    models.deleteEvent(id)
    response = HttpResponse('')
    response.__setitem__('Access-Control-Allow-Origin', '*')
    response.__setitem__('Access-Control-Allow-Credentials', 'true')
    response.__setitem__('Access-Control-Allow-Methods', 'GET, POST')
    return response

def get_all_users(request):
    users = models.User.objects.all()
    users_json = serializers.serialize("json", users)
    response = JsonResponse(users_json, safe=False)
    response.__setitem__('Access-Control-Allow-Origin', '*')
    response.__setitem__('Access-Control-Allow-Credentials', 'true')
    response.__setitem__('Access-Control-Allow-Methods', 'GET, POST')
    return response
