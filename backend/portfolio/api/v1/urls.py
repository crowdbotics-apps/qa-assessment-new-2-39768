
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import *
router = DefaultRouter()
router.register('metaltype', MetalTypeViewSet )
router.register('coin', CoinViewSet )
router.register('offerlist', OfferListViewSet )
router.register('offer', OfferViewSet )
# router.register('sportprice', SportpriceViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
