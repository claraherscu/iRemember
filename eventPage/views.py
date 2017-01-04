from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from eventPage import models
from django.core import serializers


def index(request):
    # return HttpResponse("response for example")
    html = "<html><body><a href='127.0.0.1:8000/eventPage/getTodaysEvents?ID=302184452'>get " \
           "events</a></body></html>"
    return HttpResponse(html)


def get_next_events_list(request):
    ID = request.GET.values()[0]
    events = models.get24HourEvents(ID)
    events_json = serializers.serialize("json", events)
    # return JsonResponse(events_json)
    string = ''
    for e in events:
        string += e.name
    return HttpResponse(string)
