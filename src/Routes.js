import React from 'react';
import { Switch, Route, BrowserRoute } from 'react-router-dom';
import Home from './Pages/Home';
import Subscribed from './Pages/Subscribed';
import Products from './Pages/Products';
import Customer from './Pages/Customer';

export default function Routes() {
    return (
        <BrowserRoute>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/subscribed' exact component={Subscribed} />
                <Route path='/products' exact component={Products} />
                <Route path='/customer' exact component={Customer} />
            </Switch>
        </BrowserRoute>
    )
}