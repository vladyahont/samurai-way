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
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
                alt='#'/>
            <div className={s.loginBlock}>
                {isAuth ? <div>login - <button onClick={logoutHandler}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}