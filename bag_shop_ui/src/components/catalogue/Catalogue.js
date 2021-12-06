import {Component} from "react";
import './catalogue.scss'

import BagService from "../../services/BagService";


export default class Catalogue extends Component {
    state = {
        itemList: [],
    }

    bagService = new BagService();

    componentDidMount() {
        this.bagService
            .getAllItems()
            .then(this.onItemListLoaded)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.brandName !== prevProps.brandName) {
            this.onBrandListLoaded(this.props.brandName);
        }
    }

    onBrandListLoaded = (name) => {
        this.bagService
            .getManufacturerItems(name)
            .then(this.onItemListLoaded)
    }

    onItemListLoaded = (itemList) => {
        this.setState({
            itemList
        })
    }

    renderItems(arr) {
        const itemList = arr.map((item) => {
            return (
                <div
                    className='item__info'
                    key={item.id}
                    onClick={() => this.props.onItemSelected(item.id)}>
                    <img
                        src={item.thumbnail}
                        alt={item.name}
                        className='item__img' />
                    <div className="item__name">
                        {item.product_name}
                    </div>
                    <div className="item__description">
                        {item.manufacturer}
                    </div>
                </div>
            )
        });
        return (
            <div className="item__grid">
                {itemList}
            </div>
        )
    }
    render() {
        const { itemList } = this.state;

        const items = this.renderItems(itemList)

        return (
            <div className="item__list">
                {items}
            </div>
        )
    }
}