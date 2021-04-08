import Style from './LogIn.module.css';
import TopDecor from '../content/graphics-header.svg';
import { useState } from 'react';
import axios from 'axios';

const LogIn = (props) => {
    const [mailInput, setMailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    return (
        <div className={Style.LogIn}>
        <img src={TopDecor} className={Style.TopDecor} alt="Flowers" />
            {
                props.loggedIn === false ?
                <div className={Style.ContentWrapper}>
                    <h1>Login</h1>
                    <p>Logga in nedan för att beställa och se tidigare ordrar!</p>
                    <div className={props.error === false ? Style.Form : Style.Form + ' error'}>
                        <p>{props.error === false ? '' : 'Email or password is does not exist.'}</p>
                        <input onChange={e => setMailInput(e.target.value)} type="email" name="mail" className={Style.Input} placeholder="Epost" />
                        <input onChange={e => setPasswordInput(e.target.value)} type="password" name="password" className={Style.Input} placeholder="Lösenord" />
                        <button className={Style.SubmitButton} onClick={() => props.handleUser(mailInput, passwordInput)} type="submit">Go!</button>
                    </div>
                </div> : 
                <div>
                    <h1>Welcome {props.activeUser.username}!</h1>
                    <p>Time for a nice cup of joe :)</p>
                </div>
            }
        </div>
    )
}

export default LogIn;