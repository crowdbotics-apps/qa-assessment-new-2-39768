# Generated by Django 2.2.28 on 2023-04-13 14:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_auto_20230413_1354'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offer',
            name='user',
        ),
    ]
