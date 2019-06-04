export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    }
}

export const sorByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

export const sorByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

