from rest_framework import serializers
from portfolio.models import Coin, MetalType, Offer, OfferList


class MetalTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MetalType
        fields = "__all__"


class CoinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coin
        fields = "__all__"


class OfferListSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfferList
        fields = "__all__"


class SpotpriceSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='coin.name')
    price = serializers.FloatField(source='coin.price')

    class Meta:
        model = OfferList
        fields = ["name", "price", "quantity"]


class RetailValueSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='coin.name')
    bid_premium_low = serializers.FloatField(source='coin.bid_premium_low')
    bid_premium_high = serializers.IntegerField(source='coin.bid_premium_high')

    class Meta:
        model = OfferList
        fields = ["name", "quantity", "bid_premium_low", "bid_premium_high"]


class MakeOfferSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='coin.name')
    spot_price = serializers.FloatField(source='coin.price')
    bid_premium_low = serializers.FloatField(source='coin.bid_premium_low')
    bid_premium_high = serializers.IntegerField(source='coin.bid_premium_high')

    class Meta:
        model = OfferList
        fields = ["name", "spot_price", "quantity", "bid_premium_low", "bid_premium_high", ]


class MyOfferSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='coin.name')
    id = serializers.CharField(source='offer.id')

    class Meta:
        model = OfferList
        fields = ["id", "name"]


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = "__all__"

    def to_representation(self, instance):
        _request = self.context.get('request')
        offer_list = instance.offerlist_offer.filter(user=_request.user)
        serializer = MakeOfferSerializer(offer_list, many=True)
        return serializer.data

    def create(self, validated_data):
        _request = self.context.get('request')
        offer = Offer(
            status='PENDING',
            offerer=_request.user,
        )
        offer.save()
        offer_list = OfferList(
            quantity=_request.data.get('quantity'),
            offer_price=_request.data.get('offer_price'),
            offer=offer,
            coin_id=_request.data.get('coin'),
            user_id=_request.data.get('user')
        )
        offer_list.save()
        return offer

