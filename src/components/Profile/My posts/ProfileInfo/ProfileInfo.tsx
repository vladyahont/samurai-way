import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://st3.depositphotos.com/7677414/14881/i/450/depositphotos_148811257-stock-photo-cityscape-with-empty-floor.jpg'
                    alt='#'/>
            </div>
            <div className={s.descriptionBlock}>
                <a href='###'>Main content</a>
            </div>
        </div>
    )
}