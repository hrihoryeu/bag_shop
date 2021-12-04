import {Component} from "react";
import './topBar.scss'


export default class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        showCatalogue: true
    }

    render() {
        const { toggleCatalogue } = this.props;
        return (
            <div className='top-bar'>
                <span className="top-btn">MAIN</span>
                <span
                    className="top-btn"
                    onClick={toggleCatalogue}>
                    CATALOGUE
                </span>
            </div>
        );
    }
}