import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
// @ts-ignore
import {Route, Routes, withRouter} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UserContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import PreLoader from "./components/preLoader/preLoader";

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component <AppPropsType> {

    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialize) {
            return <PreLoader/>
        }

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
}

type MapDispatchToPropsType = {
    initialize: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppStateType) => {
    initialized: state.app.initialized;
}
export default compose<React.FC>(withRouter, connect(mapStateToProps, {initialize}))(App)
