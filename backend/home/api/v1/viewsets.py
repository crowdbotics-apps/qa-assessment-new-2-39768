from allauth.account.models import EmailAddress
from rest_auth.registration.views import RegisterView
from rest_framework import viewsets, status
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
    SuperUserSerializer
)


class SignupViewSet(RegisterView):
    authentication_classes = ()


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        user_email = request.data.get('username')
        confirmed_email = EmailAddress.objects.filter(email__exact=user_email, verified=True)
        if not confirmed_email:
            return Response(
                {'non_field_errors': [
                    'To complete your account setup, please verify your email address by clicking the button below.']},
                status=status.HTTP_400_BAD_REQUEST
            )
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


class CreateSuperViewSet(ModelViewSet):
    serializer_class = SuperUserSerializer
    http_method_names = ["post"]
    authentication_classes = ()
