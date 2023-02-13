import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";
import {logOutTC} from "../../redux/auth-reducer";


export const Header: React.FC<AuthPropsType> = ({isAuth, login, logOutTC}) => {

    const logoutHandler = () => {
        logOutTC()
    }

    return (
        <header className={s.header}>
            <img
                src='https://seeklogo.com/images/E/electron-logo-5072143BD2-seeklogo.com.png'
                alt=''/>
            <div className={s.loginBlock}>
                {isAuth ? <div>
                        <button onClick={logoutHandler}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}