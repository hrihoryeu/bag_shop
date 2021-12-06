from django_filters import rest_framework as filters
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin
)

from .serializers import (
    ProductSerializer,
    ManufacturerSerializer,
    ColorSerializer,
    SizeSerializer,
    MaterialSerializer,
    FormSerializer,
)
from .filters import ProductFilter

from product.models import (
    Product,
    Manufacturer,
    Color,
    Size,
    Form,
    Material
)


class ProductViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProductFilter


class ManufacturerViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Manufacturer.objects.all()
    serializer_class = ManufacturerSerializer


class ColorViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer


class SizeViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer


class FormViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Form.objects.all()
    serializer_class = FormSerializer


class MaterialViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer
