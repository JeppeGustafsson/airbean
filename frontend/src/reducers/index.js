import counterReducer from "./counter";
import priceReducer from "./price";
import itemReducer from './item';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    price: priceReducer,
    item: itemReducer
});

export default allReducers;