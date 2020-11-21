import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//    let state = props.store.getState();
   
//    let addPost = () => {
//       props.store.dispatch(addPostActionCreator());
//    }
//    let onPostChange = (text) => {
//       props.store.dispatch(updateNewPostTextActionCreator(text));
//    }

//    return (
//       <MyPosts addPost={addPost} 
//                updateNewPostText={onPostChange} 
//                posts={state.profilePage.posts}
//                newPostText={state.profilePage.newPostText}
//                />
//    )
// }

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
         let action = updateNewPostTextActionCreator(text)
         dispatch(action);
      }
   }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;