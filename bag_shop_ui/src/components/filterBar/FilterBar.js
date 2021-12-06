import {Component} from "react";
import './filterBar.scss'
import BagService from "../../services/BagService";


export default class FilterBar extends Component {
    state = {
        brandToggle: false,
        brandList: [],
        filtersList: [],

        filterList: [
            'all',
            'manufacturer',
            'color',
            'material',
            'form',
            'size'
        ]
    }

    bagService = new BagService();

    componentDidMount() {
        this.bagService
            .getManufacturers()
            .then(this.onBrandListLoaded)
    }

    onBrandListLoaded = (brandList) => {
        this.setState({
            brandList
        })
    }

    onFilterLoaded = (filtersList) => {
        this.setState({
            filtersList
        })
    }

    renderBrands(arr) {
        const brandList = arr.map((item) => {
            return (
                <div
                    className="brand__name"
                    key={item.id}
                    onClick={() => this.props.onBrandListLoaded(item.manufacturer_name)}>
                    {item.manufacturer_name}
                </div>
            )
        });
        return brandList
    }

    renderFilters(arr) {
        const filtersList = arr.map((filterName) => {
            this.bagService
                .getAlllItems(filterName)
                .then(this.onFilterLoaded)
        });
    }

    onBrandToggle = () => {
        this.setState((state) => {
            return {
                brandToggle: !state.brandToggle
            }
        })
    }

    render() {
        const { brandList, brandToggle, filtersList, filterList } = this.state;

        console.log(filtersList);

        const brandFilter = brandToggle ? this.renderBrands(brandList) : 'BRANDS';
        const brandClassName = brandToggle ? "filter_bar__select__flex" : "filter_bar__select"

        return (
            <div className='filter_bar'>
                <div
                    className="filter_bar__head"
                    onClick={() => this.renderFilters(filterList)}>
                    FILTERS
                </div>
                <div
                    className={brandClassName}
                    onClick={this.onBrandToggle} >
                    {brandFilter}
                </div>
                <div
                    className="filter_bar__select" >
                    COLOR
                </div>
            </div>
        );
    }
}
