import { Component } from "react";
import './skeleton.scss'


export default class Skeleton extends Component {
    render() {
        return (
            <div className="catalogue__item">
                <img src="" alt="" className="catalogue__item__image"/>
                <div className="catalogue__item__name">
                    No item selected.
                </div>
                <div className="catalogue__item__description">
                    No item selected.
                </div>
                <div className="catalogue__item__price">
                    No item selected.
                </div>
            </div>
        )
    }
}