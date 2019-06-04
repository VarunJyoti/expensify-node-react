import React from 'react';
import {Link, NavLink, Switch, BrowserRouter, Route} from 'react-router-dom';

import CreateExpense from '../components/CreateExpense';
import EditExpensePage from '../components/EditExpensePage';
import Dashboard from '../components/Dashboard';

import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route path='/' component={Dashboard} exact={true}/>
            <Route path='/create' component={CreateExpense}/>
            <Route path='/edit/:id' component={EditExpensePage}/>
        
        </Switch>    
        </div>
            
    </BrowserRouter>
)

export default AppRouter;
