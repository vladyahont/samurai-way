import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";


export const Header: React.FC<AuthPropsType> = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
                alt='#'/>
            <div className={s.loginBlock}>
                {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}