import React from 'react'
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1>shopmerch.com</h1>
            <nav>
                <ul>
                    {/* <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Products</NavLink></li>
                    <li><NavLink>Shopping Cart</NavLink></li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Header
