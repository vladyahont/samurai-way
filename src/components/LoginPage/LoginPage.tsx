import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {loginTC} from "../../redux/auth-reducer";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form>
            <div onSubmit={props.handleSubmit}>
                <Field placeholder={'Email'} name={'Email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


type MapStatePropsType = {
    isAuth: boolean
    loginTC: (email: string, password: string, rememberMe: boolean) => void

}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const LoginPage = (props: MapStatePropsType) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {

    }
    return (
        <div>
            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth

})
export default connect(mapStateToProps, {loginTC})(LoginPage)