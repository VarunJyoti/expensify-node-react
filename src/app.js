import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

const store = configureStore();

store.dispatch(addExpense({text: "sasa", description: "sasa", amount: 121}))
store.dispatch(addExpense({text: "fdfdf", description: "f434", amount: 14}))
store.dispatch(setTextFilter("water"))

console.log(store.getState())

ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById("main"))



