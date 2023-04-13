from rest_framework import authentication
from portfolio.models import MetalType
from .serializers import MetalTypeSerializer
from rest_framework import viewsets

class MetalTypeViewSet(viewsets.ModelViewSet):
    serializer_class = MetalTypeSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = MetalType.objects.all()