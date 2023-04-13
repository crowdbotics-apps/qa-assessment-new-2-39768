from rest_framework import authentication
from portfolio.models import Coin,MetalType
from .serializers import CoinSerializer,MetalTypeSerializer
from rest_framework import viewsets

class MetalTypeViewSet(viewsets.ModelViewSet):
    serializer_class = MetalTypeSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = MetalType.objects.all()

class CoinViewSet(viewsets.ModelViewSet):
    serializer_class = CoinSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Coin.objects.all()