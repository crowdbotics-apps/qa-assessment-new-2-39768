from django.conf import settings
from django.db import models
class MetalType(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    price = models.FloatField()
    data = models.DateField(auto_now=True,)
class Coin(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    metal_type = models.ForeignKey("portfolio.MetalType",on_delete=models.CASCADE,related_name="coin_metal_type",)
    company = models.ForeignKey("company.Company",on_delete=models.CASCADE,related_name="coin_company",)
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="coin_user",)
    price = models.FloatField()
    bid_premium_low = models.FloatField()
    bid_premium_high = models.BigIntegerField()

# Create your models here.
