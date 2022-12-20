import React from 'react';
import {
    addPostAC,
    updateNewPostTextAC
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

// export const MyPostsContainer: React.FC = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator(store.getState().profilePage.messageForNewPost))
//                     }
//
//                     const newPostChange = (text: string) => {
//                         store.dispatch(updateNewPostTextActionCreator(text))
//                     }
//
//                     return <MyPosts profilePage={store.getState().profilePage} addPost={addPost}
//                                     updateNewPostText={newPostChange}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)