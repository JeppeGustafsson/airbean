import { Link } from 'react-router-dom';
import Style from './Register.module.css';
import TopDecor from '../content/graphics-header.svg';
import { useEffect, useState } from 'react';

const Register = (props) => {
    const [err, setErr] = useState(false);
    const [emailInput, setEmailInput] = useState('');

    const validateInput = () => {
        for (let i of props.users) {
            if (i.email === emailInput) {
                setErr(true);
                break;
            } else {
                setErr(false);
            }
        }
    }

    useEffect(() => {
        validateInput();
    },[emailInput]);

    return (
        <div className={Style.Register}>
        <img src={TopDecor} className={Style.TopDecor} alt="Flowers" />
            <div className={Style.ContentWrapper}>
                <h1>Välkommen till AirBean-familjen!</h1>
                <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
                <form action="/users" method="POST" className={Style.Form}>
                    <input type="text" name="username" className={Style.Input} placeholder="Namn" />
                    { err === false ? null : <div><p>Account with email {emailInput} already exist.</p></div> }
                    <input onChange={e => setEmailInput(e.target.value)} type="email" name="email" className={err === false ? Style.InputEmail : Style.InputEmail + ' error'} placeholder="Epost" />
                    <input type="password" name="password" className={Style.Input} placeholder="Lösenord" />
                    <button className={err === false ? Style.SubmitButton : Style.SubmitButton + ' error'} type="submit">Brew me a cup!</button>
                    <Link to="login">Already have an account? Click here to login.</Link>
                </form>
            </div>
        </div>
    )
}

export default Register;