
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CoinViewSet,MetalTypeViewSet
router = DefaultRouter()
router.register('metaltype', MetalTypeViewSet )
router.register('coin', CoinViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
