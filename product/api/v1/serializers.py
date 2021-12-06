from rest_framework.serializers import ModelSerializer, SerializerMethodField

from product.models import (
    Product,
    Manufacturer,
    Color,
    Size,
    Form,
    Material
)


class ProductSerializer(ModelSerializer):
    manufacturer = SerializerMethodField('get_manufacturer_name')
    material = SerializerMethodField('get_material_name')
    form = SerializerMethodField('get_form_name')
    color = SerializerMethodField('get_color_name')
    size = SerializerMethodField('get_size_name')

    class Meta:
        model = Product
        fields = ('id',
                  'product_name',
                  'manufacturer',
                  'description',
                  'thumbnail',
                  'material',
                  'form',
                  'color',
                  'size')

    def get_manufacturer_name(self, obj):
        return obj.manufacturer.manufacturer_name

    def get_material_name(self, obj):
        return obj.material.material_name

    def get_form_name(self, obj):
        return obj.form.form_name

    def get_color_name(self, obj):
        return obj.color.color_name

    def get_size_name(self, obj):
        return obj.size.size_name


class ManufacturerSerializer(ModelSerializer):
    class Meta:
        model = Manufacturer
        fields = '__all__'


class ColorSerializer(ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'


class SizeSerializer(ModelSerializer):
    class Meta:
        model = Size
        fields = '__all__'


class FormSerializer(ModelSerializer):
    class Meta:
        model = Form
        fields = '__all__'


class MaterialSerializer(ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__'
