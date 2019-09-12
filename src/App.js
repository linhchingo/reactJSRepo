import React from 'react';
import { Route, Switch } from "react-router-dom";

import Menu from './Components/Menu'
import routes from './Route-config'

function showRoute(routes) {
    let xRoutes
    if (routes.length >0) {
        xRoutes = routes.map((route,index)=>{
            return (
                <Route 
                    key={index} 
                    exact={route.exact} 
                    path={route.path} 
                    component={route.component} 
                />
            )
        })
    }
    return <Switch>{xRoutes}</Switch>
}

function App() {

    return (
        <div className="container-fluid">
            <div className='mt-4'>
                <Menu />
            </div>
            <div className="mt-4">
                {showRoute(routes)}
            </div>
        </div>
    );
}

export default App;
