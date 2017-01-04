from django.db import models
from django.utils import timezone
import datetime

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

    def get24HourEvents(self, tz):
        time_threshold = timezone.now() + datetime.timedelta(hours=24)
        return Event.objects.filter(user=tz).filter(time__lt=time_threshold).filter(time__gt=timezone.now())
