const priceReducer = (state = 0, action) => {
    switch(action.type) {
        case 'PRICE':
            return state = state + action.price;
        case 'CLEAR_PRICE':
            return state = 0;
        default:
            return state;
    }
}

export default priceReducer;