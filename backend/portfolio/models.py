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
class OfferList(models.Model):
    'Generated Model'
    coin = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="offerlist_coin",)
    quantity = models.BigIntegerField()
    offer = models.ForeignKey("portfolio.Offer",on_delete=models.CASCADE,null=True,blank=True,related_name="offerlist_offer",)
class Offer(models.Model):
    'Generated Model'
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="offer_user",)
    status = models.CharField(max_length=256,)
    created_date = models.DateTimeField(auto_now=True,)

# Create your models here.
