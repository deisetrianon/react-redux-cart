export const ACTIONS_TYPES = {
    CLEAR_CART: 'CLEAR_CART',
    GET_TOTALS: 'GET_TOTALS',
    REMOVE: 'REMOVE',
    TOGGLE_AMOUNT: 'TOGGLE_AMOUNT'
};

export const removeItem = id => {
    return {
        type: ACTIONS_TYPES.REMOVE,
        payload: { id }
    }
};

export const toggleItemAmount = (id, toggle) => {
    return {
        type: ACTIONS_TYPES.TOGGLE_AMOUNT,
        payload: { id, toggle }
    }
};
