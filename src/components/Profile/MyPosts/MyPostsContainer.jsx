import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
   let state = props.store.getState();
   
   let addPost = () => {
      props.store.dispatch(addPostActionCreator());
   }
   let onPostChange = (text) => {
      props.store.dispatch(updateNewPostTextActionCreator(text));
   }

   return (
      <MyPosts addPost={addPost} 
               updateNewPostText={onPostChange} 
               posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}
               />
   )
}

export default MyPostsContainer;