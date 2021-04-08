import MenuButton from './MenuButton';
import Modal from './Modal';
import Style from './MenuPage.module.css';
import TopDecor from '../content/graphics-header.svg';
import BottomDecor from '../content/graphics-footer.svg';
import { useState } from 'react';

const MenuPage = (props) => {
    const [modal, setModal] = useState(false);
    
    return (
        <div className={Style.MenuPage}>
            <h1>Menu</h1>
            <img src={TopDecor} className={Style.TopDecor} alt="Flowers" />
            <img src={BottomDecor} className={Style.BottomDecor} alt="Flowers" />
            <div className={Style.ButtonWrapper}>
                <Modal modal={modal} /> 
                {
                    props.data.map(item => {
                        return <MenuButton
                                setModal={e => setModal(e)}
                                loggedIn={props.loggedIn} 
                                key={item.id}
                                name={item.name} 
                                description={item.description} 
                                price={item.price} />
                    })
                }
            </div>
        </div>
    )
}

export default MenuPage;