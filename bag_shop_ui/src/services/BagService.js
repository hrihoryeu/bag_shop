export default class BagService {
    _apiBase = 'http://127.0.0.1:8000/api/product/'

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllItems = async () => {
        const res = await this.getResource(`${this._apiBase}`);
        return res.map(this._transformItem);
    }

    getItem = async (id) => {
        const res = await this.getResource(`${this._apiBase}/${id}`);
        return this._transformItem(res.data.results[0]);
    }

    _transformItem = (item) => {
        return {
            id: item.id,
            product_name: item.product_name,
            description: item.description,
            thumbnail: `../../resources/img${item.thumbnail.slice(21)}`
        }
    }
}
