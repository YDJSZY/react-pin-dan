/**
 * Created by luwenwei on 17/11/30.
 */
import  { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import React from 'react';
import { childMenu } from './childMenu';
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
                routes.map((route,i)=>{
                    if(route.exact) return <Route key={'route_'+i} exact path={route.path} render={()=>{return <Redirect to={"/"+route.redirect+"/"} />}}></Route>
                    return <Route key={'route_'+i} path={route.path} render={(match)=>{ return route.render(match,route.routes)}}></Route>
                })
            }
        </div>
    }
}