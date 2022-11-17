import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
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
            dispatch(addPostActionCreator(getState().profilePage.messageForNewPost))
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const SuperDialogsCont = connect(mapStateToProps, mapDispatchToProps)(MyPosts)