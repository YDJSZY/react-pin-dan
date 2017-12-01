/**
 * Created by luwenwei on 17/11/30.
 */
import  { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import React from 'react';
import { childMenu } from './childMenu';
import { createRoute } from '../../untils/commonMethods'
import Bundle from '../../route/bundle.js';

export default class MyOrders extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const routes = this.props.childRoutes;
        return <div>
            {childMenu()}
            {
                createRoute(routes)
            }
        </div>
    }
}