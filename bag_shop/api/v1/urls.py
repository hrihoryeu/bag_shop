from rest_framework.routers import DefaultRouter

from customer.api.v1.views import CustomerViewSet
from order.api.v1.views import OrderViewSet
from product.api.v1.views import ProductViewSet
from warehouse.api.v1.views import WarehouseViewSet

router = DefaultRouter()
router.register('customer', CustomerViewSet)
router.register('order', OrderViewSet)
router.register('product', ProductViewSet)
router.register('warehouse', WarehouseViewSet)

urlpatterns = router.urls
