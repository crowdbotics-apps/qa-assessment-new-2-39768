from django.conf import settings
from django.db import models
class MetalType(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    price = models.FloatField()
    data = models.DateField(auto_now=True,)

# Create your models here.
