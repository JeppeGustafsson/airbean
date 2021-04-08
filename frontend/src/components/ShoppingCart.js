import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Style from './ShoppingCart.module.css';
import { useCallback } from 'react';

const ShoppingCart = (props) => {
    const items = useSelector(state => state.item);
    const price = useSelector(state => state.price);

    const handleOrderAndUser = useCallback(() => {
        props.saveOrder();
        props.reRender(props.userData.email, props.userData.password);
    },[props.order]);

    return (
        <div className={props.activeCart === false ? Style.ShoppingCart : Style.ShoppingCart + ' active'}>
            <h1>Din beställning</h1>
            <div className={Style.ItemWrapper}>
            {
                    items.map(item => {
                        return <div key={item.id} className={Style.CartItem}>
                                    <div className={Style.TextWrapper}>
                                        <h3>{item.name}</h3>
                                        <span className="label">{item.price}</span>
                                    </div>
                               </div>
                    })
                }
                <h2>Total ....................................{price}</h2>
                <span className="label">inkl moms + drönarleverans</span>
            </div>
            <Link onClick={() => handleOrderAndUser()} to="/order-status" className={Style.Button}>Take my money!</Link>
        </div>
    )
}

export default ShoppingCart;