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
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/cart">Shopping Cart</NavLink></li>
                </ul>
            </nav>
        </div>
        <Switch>
                <Route exact path="/cart" component={Cart}/>
                <Route path="/" component={Products}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Header
