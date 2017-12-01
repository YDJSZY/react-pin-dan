/**
 * Created by luwenwe on 2017/10/11.
 */
import React from  'react';
import  { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import { constants } from './global';
var loading;
var getConstantArrayValue = function(group, value) {
    var cs = constants[group];
    if(!cs) {
        console.log("found invalid constant: " + group + name);
        return -1;
    }
    for(var i = 0; i < cs.length; ++i) {
        if(cs[i][0] === value){
            return cs[i][2];
        }
    }
    return "";
}

var getConstantObjectValue = function(group, name) {
    var cs = constants[group];
    if(!cs) {
        console.log("found invalid constant: " + group + name);
        return -1;
    }
    for(var i = 0; i < cs.length; ++i) {
        if(cs[i]["code"] === name){
            return cs[i]["description"];
        }
    }
    return -1;
}

var showLoading = function (global) {
    if(loading) return;
    var p, c;
    if(global){
        p = "fakeloader1";
        c = "spinner7";
    }else{
        p = "fakeloader6";
        c = "spinner2";
    }
    $('.' + c).show();
    $("." + p).fadeIn("fast",function () {
        loading = true;
    });
};

var hideLoading = function (global) {
    var p;
    if(global){
        p = "fakeloader1";
    }else{
        p = "fakeloader6";
    }
    $("."+p).fadeOut("fast",function () {
        loading = false;
    });
};

var translateSelectSource = function (source) {
    var newSource = []
    for(var s of source){
        var obj = {id:''+s.code,name:s.description};
        newSource.push(obj);
    }
    return newSource;
};

var findObjectById = function (objectList, id) {
    for(var i = 0; i < objectList.length; ++i) {
        var obj = objectList[i];
        if(obj.id == id) {
            return obj;
        }
    }
    return null;
};

var findObjectIndexById = function (objectList, id) {
    for(var i = 0; i < objectList.length; ++i) {
        var obj = objectList[i];
        if(obj.id == id) {
            return i;
        }
    }
    return null;
}

var createRoute = function (routes) {
    return routes.map((route,i)=>{
        if(route.exact) return <Route key={'route_'+i} exact={route.exact ? route.exact : true} path={route.path} render={()=>{return <Redirect to={"/"+route.redirect+"/"} />}}></Route>
        return <Route key={'route_'+i} path={route.path} render={(match)=>{ return route.render(match,route.routes)}}></Route>
    })
}

export { getConstantArrayValue,getConstantObjectValue,createRoute,showLoading,hideLoading,translateSelectSource,findObjectById,findObjectIndexById }