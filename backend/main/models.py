from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='doctor_photos/', null=True, blank=True)
    availability = models.BooleanField(default=True)
    specialization = models.CharField(max_length=255)
    info = models.TextField()
    appointment_fee = models.IntegerField()

    def __str__(self):
        return self.name
    