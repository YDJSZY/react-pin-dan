import React from "react";
import  { NavLink } from 'react-router-dom';
import myCombinedOrdersStyles from './style.scss';
import AllOrders from './all';
import FinishedOrders from './finished';
import UnfinishedOrders from './unfinished';
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

function getChildPage(target) {
    if(!target.match.params.target) return <AllOrders />
    if(target.match.params.target === "all") return <AllOrders />
    if(target.match.params.target === "finished") return <FinishedOrders />
    if(target.match.params.target === "unfinished") return <UnfinishedOrders />
}

export { childMenu,getChildPage}