import React from 'react'
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import Products from '../Products/Products'
import Cart from '../Cart.jsx/Cart';

const Header = () => {
    return (
        <BrowserRouter>
        <div className="header">
            <h1>shopmerch.com</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Products</NavLink></li>
                    <li><NavLink to="/cart">Shopping Cart</NavLink></li>
                </ul>
            </nav>
        </div>
        <Switch>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/cart" component={Cart}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Header
