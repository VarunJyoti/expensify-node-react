import React from 'react';
import {Link, NavLink, Switch, BrowserRouter, Route} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
        <NavLink activeClassName="is-active" to="/items">Portfolio</NavLink>
       
    </header>
)

export default Header;