import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home/Home';
import PageChamaNoZapDirect from './pages/PageChamaNoZapDirect/PageChamaNoZapDirect';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={PageChamaNoZapDirect} path="/web" />
        </BrowserRouter>
    );
}

export default Routes;