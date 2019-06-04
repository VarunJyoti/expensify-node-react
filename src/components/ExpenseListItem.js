import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { editExpense } from '../actions/expenses';
import {Link} from 'react-router-dom';
 const  ExpenseListItem = ({id, dispatch, description, amount}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount}</p>
        <button onClick={()=>{
            dispatch(removeExpense(id))
        }}>Remove</button>
       
        <Link to={`/edit/${id}`}>Edit</Link>
     </div>
)


export default connect()(ExpenseListItem);
