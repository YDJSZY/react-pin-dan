/*
*
 * Created by Apple on 17/2/6.
//import  { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import React from "react";
import { HashRouter, Route } from 'react-keeper'
import { getLocalStorage } from '../untils/global';
const $localStorage = getLocalStorage();
const currentRoute = $localStorage.route;
const exactRoute = currentRoute || "page_a";

export default class Main extends React.Component {
    render() {
        return <HashRouter>
                    <div>
                        <Route path="/page_a/"
                               enterFilter={(cb, props)=>{console.log(props);cb();}}
                               loadComponent={(cb) => {
                                    require.ensure([], (require) => { cb(require('../pages/page_a/page_a').default) }, 'page_a') }
                                }
                               index cache></Route>
                        <Route path="/page_b/"
                               enterFilter={(cb, props)=>{console.log(props);cb();}}
                               loadComponent={(cb) => {
                                    require.ensure([], (require) => { cb(require('../pages/page_b/page_b').default) }, 'page_b') }
                                }
                               cache>
                        </Route>
                        <Route path="/page_c/"
                               loadComponent={(cb) => {
                                    require.ensure([], (require) => { cb(require('../pages/page_c/page_c').default) }, 'page_c') }
                                }
                               cache></Route>
                    </div>
                </HashRouter>

    }
}
*
 * Created by Apple on 17/2/6.
import  { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import React from "react";
import Bundle from './bundle.js';
import page_a from 'bundle-loader?lazy&name=[name]!../pages/page_a/page_a.js';
import page_b from 'bundle-loader?lazy&name=[name]!../pages/page_b/page_b.js';
import page_c from 'bundle-loader?lazy&name=[name]!../pages/page_c/page_c.js';
import { getLocalStorage } from '../untils/global';
const $localStorage = getLocalStorage();
const currentRoute = $localStorage.route;
const exactRoute = currentRoute || "page_a";
const Page_a = (match) => (
    <Bundle load={page_a}>
        {(Page_a) => <Page_a match={match}/>}
    </Bundle>
)
const Page_b = (match) => (
    <Bundle load={page_b}>
        {(Page_b) => <Page_b match={match}/>}
    </Bundle>
)
const Page_c = (match) => (
    <Bundle load={page_c}>
        {(Page_c) => <Page_c match={match}/>}
    </Bundle>
)

export default class Main extends React.Component {
    render() {
        return <Switch>
            <Route exact path="/" render={()=>{return <Redirect to={"/"+exactRoute+"/"} />}}></Route>
            <Route path="/page_a/" render={(match)=>{return Page_a(match)}}></Route>
            <Route path="/page_b/" render={(match)=>{return Page_b(match)}}></Route>
            <Route path="/page_c/" render={(match)=>{return Page_c(match)}}></Route>
        </Switch>

    }
}
*/
/**
 * Created by Apple on 17/2/6.
 */
import  { BrowserRouter as Router, Switch, Route,Redirect,NavLink } from 'react-router-dom';
import React from "react";
import Bundle from './bundle.js';
import home from 'bundle-loader?lazy&name=[name]!../pages/home/home.js';
import allOrders from 'bundle-loader?lazy&name=[name]!../pages/myCombinedOrders/all.js';
import { getLocalStorage } from '../untils/global';
import { childMenu,getChildPage } from '../pages/myCombinedOrders/childMenu';
const $localStorage = getLocalStorage();
const currentRoute = $localStorage.route;
const exactRoute = currentRoute || "page_a";

const Home = (match) => (
    <Bundle load={home}>
        {(Home) => <Home match={match}/>}
    </Bundle>
)

const MyCombinedOrders = (match) => {
    return <div>
        {childMenu()}
        <Route exact path="/myCombinedOrders/" render={()=>{return <Redirect to={"/myCombinedOrders/all/"} />}}></Route>
        <Route path={`/myCombinedOrders/:target?`} render={(match)=>{return getChildPage(match)}}/>
    </div>
}
/*const routes = [
    {
        path: '/',
        render: Home
    },
    {
        path: '/myCombinedOrders/',
        render: MyCombinedOrders,
        routes: [
            {
                path: '/myCombinedOrders/all/',
                render: Bus
            },
            {
                path: '/myCombinedOrders/finished/',
                render: Cart
            },
            {
                path: '/myCombinedOrders/unfinished/',
                render: Cart
            }
        ]
    }
]*/


export default class RouteComponent extends React.Component {
    render() {
        return <Switch>
            <Route exact path="/" render={()=>{return <Redirect to={"/home/"} />}}></Route>
            <Route path="/home/" render={(match)=>{return Home(match)}}></Route>
            <Route path="/myCombinedOrders/" strict render={(match)=>{return MyCombinedOrders(match)}}></Route>
        </Switch>

    }
}
