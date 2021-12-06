import {Component} from "react";
import './searchBar.scss'


export default class SearchBar extends Component {
    render() {
        return (
            <div className="search__bar">
                <input
                    type="text"
                    className="search__input"
                    placeholder='Search by name...'/>
            </div>
        )
    }
}