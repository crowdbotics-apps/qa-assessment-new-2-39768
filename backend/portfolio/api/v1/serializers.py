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


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
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
        fields = ["name", "spot_price", "quantity", "bid_premium_low", "bid_premium_high",]
