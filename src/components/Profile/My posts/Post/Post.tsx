import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string
    likeCount: number
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avatanplus.com/files/resources/mid/5671cae75ae05151ac8097cc.png' alt='#'/>
            {props.message}
            <span>
                likes {props.likeCount}
            </span>
        </div>
    )
}