/**
 * Created by luwenwei on 17/11/25.
 */
import React from "react";
import mainStyles from './style.scss';
import Nav from '../nav/nav'
export default class HeaderComponent extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <div className={mainStyles.header}>
                <div className={mainStyles.logo}></div>
                <div className={mainStyles.search}>
                    京东
                </div>
                <div className={mainStyles.i_icon}>
                    <img src={require('../../images/Oval.png')} />
                </div>
            </div>
            <Nav />
        </div>
    }
}
