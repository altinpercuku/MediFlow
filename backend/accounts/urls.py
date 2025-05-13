from django.urls import path
from .views import RegisterClientView, RegisterAdminView, LoginView

urlpatterns = [
    path('register/client/', RegisterClientView.as_view()),
    path('register/admin/', RegisterAdminView.as_view()),
    path('login/', LoginView.as_view()),
]