import { useHistory } from 'react-router-dom';
import Icon from '../content/drone.svg';
import Style from './Order.module.css';

const Order = (props) => {
    let history = useHistory();

    return (
        <div className={Style.Order}>
            <span className="label">Ordernummer: {props.orderNumber.ordernumber}</span>
            <img src={Icon} className={Style.Icon} alt="icon" />
            <h1>Din beställning är på väg!</h1>
            <p>13 min</p>
            <button onClick={() => history.push('/menu')} className={Style.SubmitButton}>Ok, cool!</button>
        </div>
    )
}

export default Order;