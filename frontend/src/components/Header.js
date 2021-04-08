import Style from './Header.module.css';
import OrderIcon from './../content/bag.svg';
import { useSelector } from 'react-redux';

const Header = (props) => {
    const items = useSelector(state => state.item);

    return (
        <div className={Style.Header}>
            <button className={props.activeMenu === false ?
                Style.MenuButton : Style.MenuButton + ' active'} 
                onClick={props.activeMenu === false ? 
                () => props.setActiveMenu(true) : 
                () => props.setActiveMenu(false)}>
                    <div className={Style.line} />
                    <div className={Style.line} />
                    <div className={Style.line} />
            </button>
            <button className={Style.OrderButton} 
                    onClick={props.activeCart === false ? 
                        () => props.setActiveCart(true) : () => props.setActiveCart(false)}>
                <img src={OrderIcon} alt="Cart" />
                {items.length <= 0 ? null : <p className={Style.ItemsInCart}>{items.length}</p>}
            </button>
        </div>
    )
}

export default Header;