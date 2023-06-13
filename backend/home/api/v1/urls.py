from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("login", LoginViewSet, basename="login")

urlpatterns = [
    path("", include(router.urls)),
    path("signup/", SignupViewSet.as_view(), name="signup")
]
