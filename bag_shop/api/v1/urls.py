from rest_framework.routers import DefaultRouter

from customer.api.v1.views import CustomerViewSet
from order.api.v1.views import OrderViewSet
from warehouse.api.v1.views import WarehouseViewSet
from product.api.v1.views import (
    ProductViewSet,
    ManufacturerViewSet,
    ColorViewSet,
    MaterialViewSet,
    FormViewSet,
    SizeViewSet
)

router = DefaultRouter()
router.register('customer', CustomerViewSet)
router.register('order', OrderViewSet)
router.register('product', ProductViewSet)
router.register('manufacturer', ManufacturerViewSet)
router.register('color', ColorViewSet)
router.register('material', MaterialViewSet)
router.register('form', FormViewSet)
router.register('size', SizeViewSet)
router.register('warehouse', WarehouseViewSet)

urlpatterns = router.urls
