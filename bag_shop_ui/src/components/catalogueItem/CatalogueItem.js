import {Component} from "react";
import './catalogueItem.scss';
import BagService from "../../services/BagService";


export default class CatalogueItem extends Component {
    state = {
        item: {
            product_name: 'no name.'
        },
    }

    bagService = new BagService();

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem = () => {
        const {itemId} = this.props;
        if (!itemId) {
            return;
        }

        this.bagService
            .getItem(itemId)
            .then(this.onItemLoaded)
    }

    onItemLoaded = (item) => {
        this.setState({
            item
        })
        console.log(`item: ${this.state.item}`)
    }

    render() {
        const { item } = this.state;
        console.log(item)

        return (
            <div className="catalogue__item">
                <img src={item.thumbnail}
                     alt={item.product_name}
                     className="catalogue__item__image"/>
                <div className="catalogue__item__name">
                    {item.product_name}
                </div>
                <div className="catalogue__item__description">
                    {item.description}
                </div>
                <div className="catalogue__item__price">
                    No price available.
                </div>
            </div>
        )
    }
}
