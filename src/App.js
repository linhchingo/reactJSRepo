import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Menu from './Components/Menu'
import NotFound from './Components/NotFound'
import Course from './Components/Course'

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
    const routes = [
        {
            path: "/",
            exact: true,
            component: () => <Home />
        },
        {
            path: "/about",
            component: () => <About />
        },
        {
            path: "/contact",
            component: () => <Contact />
        },
        {
            path: "/course",
            component: ({match}) => <Course match={match}/>
        },
        {
            component: () => <NotFound />
        },
    ];



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
