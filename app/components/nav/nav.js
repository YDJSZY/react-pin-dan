/**
 * Created by Apple on 17/2/6.
 */
import cs from 'classnames'//引入classnames依赖库
import React from "react";
import { BrowserRouter as StaticRouter,Link,NavLink } from 'react-router-dom';
//import { Link, Route,CacheLink } from 'react-keeper'
import { getLocalStorage } from '../../untils/global';
import styles from './style.scss';
const $localStorage = getLocalStorage();

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childMenuShowing:false
        };
    }

    componentDidMount() {
    }

    componentDidUpdate() {

    }

    render() {
        return <div className={styles.nav}>
            <div className={styles.main_link}>
                <ul>
                    <li>
                        <NavLink to="/home/" activeClassName='active'>首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/preferential/" activeClassName='active'>优惠速递</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myCombinedOrders/" activeClassName='active'>我的拼单</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    }
};
