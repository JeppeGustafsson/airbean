export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const addPricePoint = (value) => {
    return {
        type: 'PRICE',
        price: value
    };
};

export const clearPrice = () => {
    return {
        type: 'CLEAR_PRICE'
    };
};

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        object: item
    };
};

export const clearItem = () => {
    return {
        type: 'CLEAR'
    };
};

export const timer = () => {
    return {
        type: 'START'
    }
}