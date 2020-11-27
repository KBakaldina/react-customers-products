import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import StartPage from './components/StartPage';
import Products from './components/Products';
import Customers from './components/Customers';

export default function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Route exact path='/'><StartPage /></Route>
            <Route exact path='/products'><Products /></Route>
            <Route exact path='/customers'><Customers /></Route>
        </BrowserRouter>        
    );
}