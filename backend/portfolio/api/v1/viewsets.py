from rest_framework import authentication
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import *
from rest_framework import viewsets


class MetalTypeViewSet(viewsets.ModelViewSet):
    serializer_class = MetalTypeSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = MetalType.objects.all()


class CoinViewSet(viewsets.ModelViewSet):
    serializer_class = CoinSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Coin.objects.all()

    def get_queryset(self):
        return self.queryset.all()


class OfferListViewSet(viewsets.ModelViewSet):
    serializer_class = OfferListSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = OfferList.objects.all()

    def get_queryset(self):
        return self.queryset.all()

    @action(detail=False, methods=['get', 'patch'], url_path='my_offer', permission_classes=(IsAuthenticated,), )
    def my_offer(self, request):
        queryset = self.queryset.filter(coin__coin_user=request.user, offer__status='PENDING')
        if request.method == 'PATCH':
            offer = Offer.objects.filter(id=request.data.get('offer_id')).update(
                status=request.data.get('offer_status'))
            return Response({'msg': 'Updated successfully'})
        my_offer_serializer = MyOfferSerializer(queryset, many=True)
        return Response(my_offer_serializer.data)


class OfferViewSet(viewsets.ModelViewSet):
    serializer_class = OfferSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Offer.objects.all()
