# Generated by Django 5.1.7 on 2025-04-28 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_doctor_delete_appointment'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='doctor_photos/'),
        ),
    ]
