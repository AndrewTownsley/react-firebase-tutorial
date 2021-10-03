import React from 'react'
import '../App.css';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom'
import Home from './Home.jsx/Home';
import Cart from './Cart.jsx/Cart'




const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Home/>
        </Route>
        <Route>
          <Cart/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

