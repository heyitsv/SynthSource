# Generated by Django 2.0.7 on 2019-07-12 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20190712_1426'),
    ]

    operations = [
        migrations.AddField(
            model_name='quizquestion',
            name='questionText',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
