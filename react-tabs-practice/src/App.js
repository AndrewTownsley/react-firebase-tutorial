import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Register  from './components/Register';
import Products  from './components/Products'; 
import Features from './components/Features';

export const RouterTabs = () => {
    return (
       <BrowserRouter>
           <div className="app">
               <header>
                 <h1>WebStuff.com</h1>
                    <nav>
                        <ul>
                            <li><Link to="features">Features</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </ul>
                    </nav>
                  </header>
               <Switch>
                  <Route path="/Register">
                    <Register/>
                  </Route>
                  <Route path="/Products">
                    <Products/>
                  </Route>
                  <Route path="/Features">
                    <Features/>
                  </Route>
               </Switch>
           </div>
       </BrowserRouter>
    )
}

    

export default RouterTabs;


