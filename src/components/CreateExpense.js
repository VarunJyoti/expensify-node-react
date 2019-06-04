import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';
const CreateExpense = (props) => (
    <div>
        <ExpenseForm onSubmit={(expense)=> {
            props.dispatch(addExpense(expense))
        }}/>
    </div>
)
export default connect()(CreateExpense);