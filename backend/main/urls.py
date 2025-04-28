from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name="home"),
    path('api/doctors/', DoctorAPIView.as_view(), name='doctor-list'),
]