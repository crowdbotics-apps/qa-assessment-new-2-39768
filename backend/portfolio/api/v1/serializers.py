from rest_framework import serializers
from portfolio.models import MetalType

class MetalTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = MetalType
        fields = "__all__"