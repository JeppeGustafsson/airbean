import { useHistory } from 'react-router-dom';
import Style from './Modal.module.css';

const Modal = (props) => {
    let history = useHistory();

    return (
        <div className={props.modal === true ? Style.Modal + ' active' : Style.Modal}>
            <h1>Oops.. Looks like you're not logged in.</h1>
            <h3>Please log in or register to order.</h3>
            <button className={Style.Button} onClick={() => history.push('/register')}>Login</button>
        </div>
    )
}

export default Modal;