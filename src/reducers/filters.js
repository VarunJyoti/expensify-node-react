export default (state = {text: '', sortBy: 'date', startDate: undefined}, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER': 
             return {
                 ...state,
                 text: action.text
             }
        case 'SORT_AMOUNT': 
             return {
                 ...state,
                 sortBy: amount
             }    
        default:
            return state;
    }
}