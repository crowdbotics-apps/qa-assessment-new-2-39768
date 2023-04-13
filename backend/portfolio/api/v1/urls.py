
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MetalTypeViewSet
router = DefaultRouter()
router.register('metaltype', MetalTypeViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
