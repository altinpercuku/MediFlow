from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import (
    RegisterClientSerializer,
    RegisterAdminSerializer,
    LoginSerializer,
    UserSerializer
)
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny

class RegisterClientView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterClientSerializer
    permission_classes = [AllowAny]

class RegisterAdminView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterAdminSerializer
    permission_classes = [AllowAny]

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': UserSerializer(user).data
        })