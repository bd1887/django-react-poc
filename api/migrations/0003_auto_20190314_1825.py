# Generated by Django 2.1.5 on 2019-03-14 18:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190314_1500'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='first_name',
            new_name='firstName',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='last_name',
            new_name='lastName',
        ),
    ]
