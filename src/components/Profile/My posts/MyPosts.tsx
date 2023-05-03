import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ProfilePageType} from "redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsType = {
    profilePage: ProfilePageType
    addPost: (newPostText: string) => void
}


export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElement = props.profilePage.posts.map((p, index) =>
        <Post key={index} message={p.message} likeCount={p.likeCount}/>)


    const addPost = (values: FormForPostDataType) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={s.postsBlock}>
            <h4>My posts</h4>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                New posts
            </div>
            <div key={props.profilePage.messageForNewPost}>
                {postsElement}
            </div>
        </div>
    )
}

type FormForPostDataType = {
    newPostText: string
}
export const AddPostForm: React.FC<InjectedFormProps<FormForPostDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'}
                   name={'newPostText'}
                   placeholder={"Write anything you think"}>
            </Field>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const AddPostFormRedux = reduxForm<FormForPostDataType>({form: 'postAddPostForm'})(AddPostForm)
