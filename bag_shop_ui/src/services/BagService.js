import * as url from "url";

export default class BagService {
    _apiBase = 'http://127.0.0.1:8000/api/'
    _apiBaseProduct = 'http://127.0.0.1:8000/api/product/'
    _apiBaseManufacturer = 'http://127.0.0.1:8000/api/manufacturer/'


    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllItems = async () => {
        const res = await this.getResource(`${this._apiBaseProduct}`);
        return res.map(this._transformItem);
    }

    getAlllItems = async (filterName) => {
        let url = '';
        filterName === 'all' ? url = `${this._apiBase}product/` : url = `${this._apiBase}${filterName}/`
        const res = await this.getResource(url);
        const result = {filterName: filterName,
                        data: res.map(this.mapping[filterName])}
        return result;
    }

    getManufacturerItems = async (manufacturer) => {
        const res = await this.getResource(`${this._apiBaseProduct}?manufacturer__manufacturer_name=${manufacturer}`);
        return res.map(this._transformItem);
    }

    getManufacturers= async () => {
        const res = await this.getResource(`${this._apiBaseManufacturer}`);
        return res.map((item) => {
            return {
                id: item.id,
                manufacturer_name: item.manufacturer_name,
            }
        });
    }

    getItem = async (id) => {
        const res = await this.getResource(`${this._apiBaseProduct}${id}`);
        return this._transformItem(res);
    }

    _transformItem = (item) => {
        return {
            id: item.id,
            product_name: item.product_name,
            description: item.description,
            manufacturer: item.manufacturer,
            thumbnail: item.thumbnail ? item.thumbnail.slice(21) : "/media/product_img/no_image.png",
        }
    }

    _transformManufacturer = (item) => {
        return {
            id: item.id,
            manufacturer_name: item.manufacturer_name,
        }
    }

    _transformColor = (item) => {
        return {
            id: item.id,
            color_name: item.color_name,
        }
    }

    _transformMaterial = (item) => {
        return {
            id: item.id,
            material_name: item.material_name,
        }
    }

    _transformForm = (item) => {
        return {
            id: item.id,
            form_name: item.form_name,
        }
    }

    _transformSize = (item) => {
        return {
            id: item.id,
            size_name: item.size_name
        }
    }

    mapping = {
        'all': this._transformItem,
        'manufacturer': this._transformManufacturer,
        'color': this._transformColor,
        'material': this._transformMaterial,
        'form': this._transformForm,
        'size': this._transformSize,
    }
}
