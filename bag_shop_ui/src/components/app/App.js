import {Component} from "react";
import TopBar from "../topBar/TopBar";
import Catalogue from "../catalogue/Catalogue";

export default class App extends Component {
    state = {
        showCatalogue: false,
    }

    toggleCatalogue = () => {
        this.setState((state) => {
            return {
                showCatalogue: !state.showCatalogue
            }
        })
    }

    render() {
        const {showCatalogue} = this.state
        const catalogue = showCatalogue ? <Catalogue /> : null;
        return (
            <>
                <TopBar toggleCatalogue={this.toggleCatalogue} />
                {catalogue}
            </>
        )
    }
}