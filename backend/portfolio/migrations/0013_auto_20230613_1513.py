# Generated by Django 2.2.28 on 2023-06-13 15:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0012_auto_20230613_1510'),
    ]

    operations = [
        migrations.RenameField(
            model_name='coin',
            old_name='user',
            new_name='coin_user',
        ),
    ]
