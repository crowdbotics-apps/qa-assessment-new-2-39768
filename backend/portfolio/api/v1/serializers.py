from rest_framework import serializers
from portfolio.models import Coin,MetalType

class MetalTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = MetalType
        fields = "__all__"

class CoinSerializer(serializers.ModelSerializer):

    class Meta:
        model = Coin
        fields = "__all__"