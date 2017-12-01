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
import { childMenu } from '../pages/myCombinedOrders/childMenu';
import finishedOrders from 'bundle-loader?lazy&name=[name]!../pages/myCombinedOrders/finished.js';
import unfinishedOrders from 'bundle-loader?lazy&name=[name]!../pages/myCombinedOrders/unfinished.js';
import MyOrders from '../pages/myCombinedOrders/index';
import { createRoute } from '../untils/commonMethods'
const $localStorage = getLocalStorage();
const currentRoute = $localStorage.route;
const exactRoute = currentRoute || "page_a";

const Home = (match) => (
    <Bundle load={home}>
        {(Home) => <Home match={match}/>}
    </Bundle>
)

const AllOrders = (match) => (
    <Bundle load={allOrders}>
        {(AllOrders) => <AllOrders match={match}/>}
    </Bundle>
)

const FinishedOrders = (match) => (
    <Bundle load={finishedOrders}>
        {(FinishedOrders) => <FinishedOrders match={match}/>}
    </Bundle>
)

const UnfinishedOrders = (match) => (
    <Bundle load={unfinishedOrders}>
        {(UnfinishedOrders) => <UnfinishedOrders match={match}/>}
    </Bundle>
)
const MyCombinedOrders = (match,routes) => {
    return <MyOrders match={match} childRoutes={routes} />
}
const routes = [
    {
        exact:true,
        redirect:'home',
        path: '/',
        render: Home
    },
    {
        path: '/home/',
        render: Home
    },
    {
        path: '/myCombinedOrders/',
        render: MyCombinedOrders,
        routes: [
            {
                exact:true,
                redirect:'myCombinedOrders/all',
                path: '/myCombinedOrders/'
            },
            {
                path: '/myCombinedOrders/all/',
                render: AllOrders,
                routes:[]
            },
            {
                path: '/myCombinedOrders/finished/',
                render: FinishedOrders
            },
            {
                path: '/myCombinedOrders/unfinished/',
                render: UnfinishedOrders
            }
        ]
    }
]

export default class RouteComponent extends React.Component {
    render() {
        return <Switch>
            {createRoute(routes)}
        </Switch>

    }
}
