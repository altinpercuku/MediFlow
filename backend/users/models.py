from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_admin_user = models.BooleanField(default=False)
    is_client = models.BooleanField(default=True)

    def __str__(self):
        return self.username