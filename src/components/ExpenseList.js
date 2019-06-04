import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';


 const  ExpenseList = (props) => (
    <div>
     Expense List
     <ul>
        {props.expenses.map((expense, i) =>{ return <ExpenseListItem key={i} {...expense}></ExpenseListItem>})}
     </ul>
     </div>
)
 
 const mapStateToProps = (state)=> {
     return {
         expenses: state.expenses
     }
 }
 
export default connect(mapStateToProps)(ExpenseList);
