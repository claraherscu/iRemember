from django.db import models
from django.utils import timezone

class User(models.Model):
    tz = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)


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


def get24HourEvents(tz):

    userEvents = Event.objects.filter(user=tz)

    dayRecurring = userEvents.filter(recurrence='Day')
    weekRecurring = userEvents.filter(recurrence='Week')
    monthRecurring = userEvents.filter(recurrence='Month')
    yearRecurring = userEvents.filter(recurrence='Year')
    nonRecurring = userEvents.filter(recurrence='')

    # get only the recurring events that are in the next 24 hours:
    trueDayRecurring = dayRecurring
    trueWeekRecurring = weekRecurring.filter(time__week_day = timezone.now().weekday())
    trueMonthRecurring = monthRecurring.filter(time__day = timezone.now().day)
    trueYearRecurring = yearRecurring.filter(time__day = timezone.now().day, time__month = timezone.now().month)

    # get only what hasn't happened today yet:
    eventsToReturn = trueDayRecurring | trueWeekRecurring | trueMonthRecurring | trueYearRecurring | nonRecurring
    eventsToReturn = eventsToReturn.filter(time__hour__gt = timezone.now().hour)

    return eventsToReturn.order_by('time')