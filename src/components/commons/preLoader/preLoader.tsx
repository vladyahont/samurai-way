import React from 'react';
import s from "../../Users/users.module.css";
import loadingGif from "../../../assets/img/loading-gif.gif";

export const PreLoader = () => {
    return (
        <div className={s.loadingGif}>
            <img alt={''} src={loadingGif}/>
        </div>
    );
};

export default PreLoader;