import React from 'react';

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'
import Course from './Components/Course'
import PromptEx from './Components/PromptEx'

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
        component: ({ match }) => <Course match={match} />
    },
    {
        path: "/promptEx",
        component: () => <PromptEx />
    },
    {
        component: () => <NotFound />
    },
];

export default routes