import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes, useParams} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UserContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import PreLoader from "./components/commons/preLoader/preLoader";

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
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
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
    return {initialized: state.app.initialized}
}

function withRouter(Component: any) {
    function ComponentWithParams(props: Omit<AppPropsType, 'params'>) {
        return <Component {...props} params={useParams()}/>
    }

    return ComponentWithParams
}

export default compose<React.FC>(withRouter, connect(mapStateToProps, {initialize}))(App)
