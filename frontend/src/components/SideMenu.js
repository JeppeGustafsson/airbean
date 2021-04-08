import { Link } from 'react-router-dom';
import Style from './SideMenu.module.css';

const SideMenu = (props) => {

    return (
        <div className={props.activeMenu === false ? Style.SideMenu : Style.SideMenu + ' active'}>
            <Link onClick={props.activeMenu === false ? 
                () => props.setActiveMenu(true) : 
                () => props.setActiveMenu(false)} to="/menu">Menu</Link>
            <div className={Style.Divider} />
            <Link onClick={props.activeMenu === false ? 
                () => props.setActiveMenu(true) : 
                () => props.setActiveMenu(false)} to="/info">Vårt kaffe</Link>
            <div className={Style.Divider} />
            {
                props.loggedIn === false ? null :
                <div>
                    <Link onClick={props.activeMenu === false ? 
                    () => props.setActiveMenu(true) : 
                    () => props.setActiveMenu(false)} to="/profile">Min profil</Link>
                    <div className={Style.Divider} />
                </div>
            }
            <Link onClick={props.activeMenu === false ? 
                () => props.setActiveMenu(true) : 
                () => props.setActiveMenu(false)} to="/register">Logga in</Link>
        </div>
    )
}

export default SideMenu;