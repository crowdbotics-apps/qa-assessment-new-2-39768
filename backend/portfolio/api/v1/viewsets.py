from django.db.models import F
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
        if not self.request.user.is_superuser:
            return self.queryset.filter(user=self.request.user)
        return self.queryset


class OfferListViewSet(viewsets.ModelViewSet):
    serializer_class = OfferListSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = OfferList.objects.all()

    def get_queryset(self):
        return self.queryset.all()

    @action(detail=False, methods=['get'], url_path='spot_price', permission_classes=(IsAuthenticated,), )
    def spot_price(self, request):
        queryset = self.queryset.all()
        sport_serializer = SpotpriceSerializer(queryset, many=True)
        return Response(sport_serializer.data)

    @action(detail=False, methods=['get'], url_path='retail_value', permission_classes=(IsAuthenticated,), )
    def retail_value(self, request):
        lower_price = request.query_params.get('lower_price')
        higher_price = request.query_params.get('higher_price')
        order_field = request.query_params.get('order_field', '-coin__bid_premium_high')
        if lower_price and higher_price:
            queryset = self.queryset.filter(coin__bid_premium_low__gte=lower_price,
                                            coin__bid_premium_high__lte=higher_price).order_by(order_field)
            retail_value_serializer = RetailValueSerializer(queryset, many=True)
            return Response(retail_value_serializer.data)

        queryset = self.queryset.order_by(order_field)
        retail_value_serializer = RetailValueSerializer(queryset, many=True)
        return Response(retail_value_serializer.data)

    @action(detail=False, methods=['get'], url_path='make_offer', permission_classes=(IsAuthenticated,), )
    def make_offer(self, request):
        lower_price = request.query_params.get('lower_price')
        higher_price = request.query_params.get('higher_price')
        order_field = request.query_params.get('order_field', '-coin__bid_premium_high')
        if lower_price and higher_price:
            queryset = self.queryset.filter(coin__bid_premium_low__gte=lower_price,
                                            coin__bid_premium_high__lte=higher_price).order_by(order_field)
            retail_value_serializer = MakeOfferSerializer(queryset, many=True)
            return Response(retail_value_serializer.data)

        queryset = self.queryset.order_by(order_field)
        make_offer_serializer = MakeOfferSerializer(queryset, many=True)
        return Response(make_offer_serializer.data)


class OfferViewSet(viewsets.ModelViewSet):
    serializer_class = OfferSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Offer.objects.all()
