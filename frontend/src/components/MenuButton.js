import React from 'react';
import Style from './MenuButton.module.css';
import { useDispatch } from 'react-redux';
import { increment, addPricePoint, addItem } from '../actions/index';

const MenuButton = (props) => {
    let dispatch = useDispatch();
    const item = {
            name: props.name,
            description: props.description,
            price: props.price
    }

    const addItems = () => {
        dispatch(increment());
        dispatch(addPricePoint(props.price));
        dispatch(addItem(item));
    }

    return (
        <button onClick={props.loggedIn === false ? () => props.setModal(true) : () => addItems()} className={Style.MenuButton}>
            <div className={Style.NameAndPriceWrapper}>
                <h3>{props.name}</h3>
                <h3>{props.price}kr</h3>
            </div>
            <span className="label">
                {props.description}
            </span>
        </button>
    )
}

export default MenuButton;