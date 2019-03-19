# Generated by Django 2.1.5 on 2019-03-14 15:00

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade',
            name='exam',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='grades', to='api.Exam'),
        ),
        migrations.AlterField(
            model_name='grade',
            name='score',
            field=models.DecimalField(decimal_places=2, max_digits=5, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)]),
        ),
        migrations.AlterField(
            model_name='grade',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='grades', to='api.Student'),
        ),
    ]
