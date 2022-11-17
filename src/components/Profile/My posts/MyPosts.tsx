import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ProfilePageType} from "../../../redux/store";


type MyPostsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}


export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElement = props.profilePage.posts.map((p: any) => <Post message={p.message}
                                                                     likeCount={p.likeCount}/>)


    const addPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator(props.profilePage.messageForNewPost))
    }

    const newPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostTextActionCreator(event.currentTarget.value))
    }


    return (
        <div className={s.postsBlock}>
            <h4>My posts</h4>
            <div>
                <div>
                    <textarea onChange={newPostChange}
                              value={props.profilePage.messageForNewPost}
                              placeholder={"Write anything you think"}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                New posts
            </div>
            <div key={props.profilePage.messageForNewPost}>
                {postsElement}
            </div>
        </div>
    )
}