# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-01-05 03:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventPage', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='type',
            field=models.CharField(default='Old', max_length=50),
        ),
    ]
