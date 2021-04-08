const itemReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return state = [...state, action.object];
        case 'CLEAR':
            return state = [];
        default:
            return state;
    }
}

export default itemReducer;