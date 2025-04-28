from .models import Doctor
from rest_framework import serializers

class DoctorSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField(use_url=True)
    class Meta:
        model = Doctor
        fields = "__all__"
