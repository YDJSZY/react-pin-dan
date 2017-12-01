import React from "react";
import  { NavLink } from 'react-router-dom';
import myCombinedOrdersStyles from './style.scss';

function childMenu () {
    return <ul className={myCombinedOrdersStyles.my_combined_orders}>
        <li>
            <NavLink to={`/myCombinedOrders/all/`} activeClassName={myCombinedOrdersStyles.active}>全部拼单</NavLink>
        </li>
        <li>
            <NavLink to={`/myCombinedOrders/finished/`} activeClassName={myCombinedOrdersStyles.active}>已完成</NavLink>
        </li>
        <li>
            <NavLink to={`/myCombinedOrders/unfinished/`} activeClassName={myCombinedOrdersStyles.active}>未完成</NavLink>
        </li>
    </ul>
}

export { childMenu }