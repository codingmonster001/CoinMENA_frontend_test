//HashRouter  (./router/index.tsx)
import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";// import index from '../views/Index/index';
import TrendingDevelopers from '../views/TrendingDevelopers/index';
import TrendingRepos from '../views/TrendingRepos/index';
export default class RouteConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TrendingRepos />} />
                    <Route path="/developers" element={<TrendingDevelopers />} />
                    <Route path="/repos" element={<TrendingRepos />} />
                    {/* <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} /> */}
                </Routes>
            </BrowserRouter>
        )
    }
}
