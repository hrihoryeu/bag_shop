from rest_framework.serializers import ModelSerializer

from order.models import (
    OrderList,
    Order
)


class OrderListSerializer(ModelSerializer):
    class Meta:
        model = OrderList
        fields = '__all__'


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
