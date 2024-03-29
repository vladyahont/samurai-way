import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from "redux/redux-store";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

// @ts-ignore
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// store.subscribe(() => {
//     let redux = store.getState()
//     rerenderEntireTree()
// })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

