import {createStore, combineReducers} from 'redux';
import  uuid from 'uuid';


const expensesReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter((r) => r.id != action.expense.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }
}

const filtersReducer = (state = {text: '', sortBy: 'date', startDate: undefined}, action) => {
    switch(action.type){
        default:
            return state;
    }
}
const incrementCount= (by) => ({
    type: 'INCREMENT',
    incrementBy: by
});

  

const store= createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    console.log(store.getState());
})
var expense1 = store.dispatch({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        text: 'rent',
        description: 'dsds',
        amount: 120
    }
});
var expense2 = store.dispatch({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        text: 'coffee',
        description: 'dsds',
        amount: 200
    }
})

store.dispatch({
    type: 'REMOVE_EXPENSE',
    expense: {
        id: expense1.expense.id
    }
})

store.dispatch({
    type: 'EDIT_EXPENSE',
    id: expense2.expense.id,
    updates: {
        amount: 500
    }
})


