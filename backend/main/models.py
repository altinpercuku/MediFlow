from django.db import models

# Create your models here.

class Appointment(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()

    def __repr__(self):
        return self.name
    