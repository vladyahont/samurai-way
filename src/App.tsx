import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UserContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";


export const App: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/profile/*' element={<ProfileContainer/>}/>
                    <Route path='/users' element={<UserContainer/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </div>
        </div>
    )
}
