/**
 * Created by luwenwei on 17/8/29.
 */
//import MyMenu from './components/nav';
import HeaderComponent from './components/header/header';
import RouteComponent from './route/routes';
import React from "react";
import globalStyles from './styles/global.scss';
import 'lib-flexible';
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
   
    render() {
        return <div className={globalStyles.ping_dan}>
            <div className={globalStyles.app_header}>
                <HeaderComponent></HeaderComponent>
            </div>
            <div className={globalStyles.main}>
                <RouteComponent></RouteComponent>
            </div>
        </div>
    }
}
