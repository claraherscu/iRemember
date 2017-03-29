from django.db import models
from django.utils import timezone
import random
import datetime

class User(models.Model):
    tz = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50, default='Jerusalem')
    type = models.CharField(max_length=50, default='Old')

    def __str__(self):
        return self.name

class Event(models.Model):
    time = models.DateTimeField('event time')
    name = models.CharField(max_length=50)
    comment = models.CharField(max_length=500)
    sound = models.CharField(max_length=200)
    picture = models.CharField(max_length=200)
    recurrence = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class userGroup(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    groupName = models.CharField(max_length=200)

    def __str__(self):
        return self.groupName


def get24HourEvents(tz):

    userEvents = Event.objects.filter(user=tz)

    dayRecurring = userEvents.filter(recurrence='Day')
    weekRecurring = userEvents.filter(recurrence='Week')
    monthRecurring = userEvents.filter(recurrence='Month')
    yearRecurring = userEvents.filter(recurrence='Year')
    nonRecurring = userEvents.filter(recurrence='')

    # get only the recurring events that are in the next 24 hours:
    trueDayRecurring = dayRecurring
    trueWeekRecurring = weekRecurring.filter(time__week_day = ((timezone.now().isoweekday()) % 7) + 1)
    trueMonthRecurring = monthRecurring.filter(time__day = timezone.now().day)
    trueYearRecurring = yearRecurring.filter(time__day = timezone.now().day, time__month = timezone.now().month)

    # get only what hasn't happened today yet:
    eventsToReturn = trueDayRecurring | trueWeekRecurring | trueMonthRecurring | trueYearRecurring | nonRecurring

    for event in eventsToReturn:
        event.time = timezone.datetime(timezone.now().year, timezone.now().month, timezone.now().day, event.time.hour,
                                       event.time.minute, event.time.second, event.time.microsecond, timezone.now().tzinfo)

    eventsToReturn = eventsToReturn.filter(time__hour__gt = timezone.now().hour)

    return eventsToReturn.order_by('time')

def newEvent(time, name, comment, sound, picture, recurrence, user):
    event = Event(random.randint(1,9999999999), time, name, comment, sound, picture, recurrence, user)
    event.save()

def newUserGroupEvent(userGroupName, time, name, comment, sound, picture, recurrence):
    records = userGroup.objects.filter(groupName=userGroupName)
    for record in records:
        newEvent(time, name, comment, sound, picture, recurrence, record.user.tz)

def addNewGroup(groupName, user):
    group = userGroup(random.randint(1,9999999999),user, groupName)
    group.save()

def addNewUser(tz, name, city, type):
    user = User(tz, name, city, type)
    user.save()

def deleteEvent(eventID):
    event = Event.objects.get(id=eventID)
    event.delete()