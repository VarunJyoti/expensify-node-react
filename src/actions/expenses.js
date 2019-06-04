import  uuid from 'uuid';
export const addExpense = ({text, description, amount}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            text,
            description,
            amount
        }
    }
}

export const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}