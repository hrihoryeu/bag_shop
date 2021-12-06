import {Component} from "react";
import './filterBar.scss'
import BagService from "../../services/BagService";


export default class FilterBar extends Component {
    state = {
        toggle: false,
        brandList: [],
        filtersList: [],

        filterList: [
            'all',
            'manufacturer',
            'color',
            'material',
            'form',
            'size'
        ],

        toggleList: {
            'all': false,
            'manufacturer': false,
            'color': false,
            'material': false,
            'form': false,
            'size': false,
        }
    }

    bagService = new BagService();

    componentDidMount() {
        const {filterList} = this.state
        filterList.map((name) => {
            this.bagService
                .getAlllItems(name)
                .then(this.onFilterLoaded)
        });
    }

    onBrandListLoaded = (brandList) => {
        this.setState({
            brandList
        })
    }

    onFilterLoaded = (newList) => {
        this.setState(({filtersList}) => {
            return {
                filtersList: [...filtersList, newList]
            }
        })
    }

    renderItem(content, name) {
        const itemList = content.map((item) => {
            return (
                <div
                    className={`${name}__name`}
                    key={item.id}
                    onClick={() => this.props.onBrandListLoaded(item.manufacturer_name)}>
                    {item.manufacturer_name}
                </div>
            )
        });
        return brandList
    }

    onToggle = (item) => {
        const { toggleList } = this.state;
        let newToggleList = {
            'all': false,
            'manufacturer': false,
            'color': false,
            'material': false,
            'form': false,
            'size': false,
        }
        newToggleList[item['filterName']] = !toggleList[item['filterName']]

        this.setState({
            toggleList: newToggleList
        })
        console.log(toggleList)
    }

    renderFilters(arr) {
        const filtersList = arr.map((item) => {
            const { toggleList } = this.state;
            const clazzName = toggleList[item['filterName']] ? "filter_bar__select__flex" : "filter_bar__select";
            const content = toggleList[item['filterName']] ? this.renderItem(item['data'], item['filterName']) : item['filterName'];
            return (
                <div
                    className={clazzName}
                    onClick={() => this.onToggle(item)}>
                    {content}
                </div>
            )
        });
        return filtersList
    }

    onBrandToggle = () => {
        this.setState((state) => {
            return {
                brandToggle: !state.brandToggle
            }
        })
    }

    render() {
        const { brandList, brandToggle, filtersList, filterList, toggleList } = this.state;

        const filters = this.renderFilters(filtersList);
        const brandClassName = brandToggle ? "filter_bar__select__flex" : "filter_bar__select"

        return (
            <div className='filter_bar'>
                <div
                    className="filter_bar__head"
                    onClick={() => console.log(toggleList)} >
                    FILTERS
                </div>
                {filters}
            </div>
        );
    }
}
