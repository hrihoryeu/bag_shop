import {Component} from "react";
import './catalogue.scss'

import BagService from "../../services/BagService";
import r from '../../resources/img/product_img/'


export default class Catalogue extends Component {
    state = {
        itemList: [],
    }

    bagService = new BagService();

    componentDidMount() {
        this.bagService
            .getAllItems()
            .then(this.onItemListLoaded)
        console.log('mount')
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    onItemListLoaded = (itemList) => {
        this.setState({
            itemList
        })
    }

    renderItems(arr) {
        const itemList = arr.map((item) => {
            return (
                <li
                    className='item'
                    key={item.id} >
                    <img src={item.thumbnail} alt={item.name}/>
                    <div className="item__name">
                        {item.product_name}
                    </div>
                    <div className="item__description">
                        {item.description}
                    </div>
                </li>
            )
        });
        return (
            <ul className="item__grid">
                {itemList}
            </ul>
        )
    }
    render() {
        const { itemList } = this.state;

        const items = this.renderItems(itemList)

        return (
            <div className="item__list">
                {items}
                <button
                    className='button'>
                    LOAD MORE
                </button>
            </div>
        )
    }
}