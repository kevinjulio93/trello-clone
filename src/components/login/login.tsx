import React from 'react';
import './login.scss';
import logo from './../../assets/trello-logo-blue-clone.svg';


function Login() {

    const loginProcess = (event: any) => {
        console.log("imprimiendo algo");
        event.preventDefault();
    }


    return (
        <div className='trello-login'>
            <img className='trello-login__logo' src={logo} alt="logo trello" />
            <div className='trello-login__form'>
                <form onSubmit={loginProcess} className="trello-login__form__box">
                    <input className="trello-login__form__box__input" type="text" placeholder='Introduzca el correo electrónico' />
                    <input className="trello-login__form__box__input" type="text" placeholder='password' />
                    <button className='trello-login__form__box__submit'> Log In </button>
                </form>
            </div>
        </div>
    )
}


export default Login