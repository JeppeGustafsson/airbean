import Style from './ProfilePage.module.css';
import TopDecor from '../content/graphics-header.svg';
import ProfileIcon from '../content/Profile.svg';
import ArrowDown from '../content/arrow-down.svg';
import { useEffect, useState } from 'react';

const ProfilePage = (props) => {

    const handleActive = (e) => {
        e.nextElementSibling.className === Style.Drinks + ' active' ?
        e.nextElementSibling.className = Style.Drinks :
        e.nextElementSibling.className = Style.Drinks + ' active';
    }

    useEffect(() => {
        props.reRender(props.activeUser.email, props.activeUser.password);
    },[]);

    return (
        <div className={Style.ProfilePage}>
            <img src={TopDecor} className={Style.TopDecor} alt="Flowers" />
            <img src={ProfileIcon} className={Style.Icon} alt="Flowers" />
            <h1>{props.activeUser.username}</h1>
            <p>{props.activeUser.email}</p>
            <h3>Previous orders:</h3>
            {
                props.activeUser.orders <= 0 ? 'No order history...' : 
                props.activeUser.orders.map(order => {
                    return <div className={Style.Order} key={order.order.ordernumber}>
                                <p>Order: {order.order.ordernumber}</p>
                                <p>Date: {order.order.date.slice(0,10)}</p>
                                <button onClick={(e) => handleActive(e.currentTarget)} className={Style.Btn}>
                                        <img src={ArrowDown} alt="arrow" />
                                </button>
                                <div className={Style.Drinks}>
                                    {order.order.items.map(item => {
                                        return <div className={Style.DrinkItem}>
                                                    <p>{item.name}</p>
                                                    <p>{item.price + 'kr'}</p>
                                            </div>
                                    })}
                                </div>
                                <p className={Style.Total}>Total: {order.order.total}kr</p>
                            </div>
                })
            }
        </div>
    )
}

export default ProfilePage;