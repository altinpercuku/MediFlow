from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Doctor
from .serializers import DoctorSerializer
# Create your views here.


def home(request):
    return HttpResponse("<h1>Altin</h1>")


class DoctorAPIView(APIView):
    def get(self, request):
        doctors = Doctor.objects.all()
        serializer = DoctorSerializer(doctors, many=True)
        return Response(serializer.data)
