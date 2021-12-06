import {Component} from "react";
import TopBar from "../topBar/TopBar";
import Catalogue from "../catalogue/Catalogue";
import CatalogueItem from "../catalogueItem/CatalogueItem";

import './app.scss'
import SearchBar from "../searchBar/SearchBar";
import FilterBar from "../filterBar/FilterBar";

export default class App extends Component {
    state = {
        showCatalogue: false,
        selectedItem: 1,
        brandName: ''
    }

    toggleCatalogue = () => {
        this.setState((state) => {
            return {
                showCatalogue: !state.showCatalogue
            }
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        })
    }

    onBrandListLoaded = (name) => {
        this.setState({
            brandName: name
        })
    }

    render() {
        const {showCatalogue, selectedItem, brandName} = this.state;
        const search = showCatalogue ? <SearchBar /> : null;
        const catalogue = showCatalogue ? <Catalogue onItemSelected={this.onItemSelected} brandName={brandName}/> : null;
        const itemInfo = showCatalogue ? <CatalogueItem itemId={selectedItem} /> : null;
        const filter = showCatalogue ? <FilterBar onBrandListLoaded={this.onBrandListLoaded}/> : null
        return (
            <>
                <TopBar toggleCatalogue={this.toggleCatalogue} />
                <div className="catalogue__content">
                    {filter}
                    <div className="catalogue__left">
                        {search}
                        {catalogue}
                    </div>
                    {itemInfo}
                </div>
            </>
        )
    }
}