from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin
)

from .serializers import WarehouseSerializer
from warehouse.models import Warehouse


class WarehouseViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Warehouse.objects.all()
    serializer_class = WarehouseSerializer
