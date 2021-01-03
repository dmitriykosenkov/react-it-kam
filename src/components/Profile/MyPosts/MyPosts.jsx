import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount} key={p.id} />);

   let onAddPost = () => {
      props.addPost();
   }
   let onPostChange = (e) => {
      let text = e.target.value;
      props.updateNewPostText(text);
   }
   const onSubmit = formData => {
      console.log(formData);
   }
   return (
      <div className={s.postsBlock}>
         <h3>Posts</h3>
         <div>
            <NewPostReduxForm onSubmit={onSubmit} onAddPost={onAddPost} onPostChange={onPostChange} 
            newPostText={props.newPostText}/>
            <div className={s.posts}>
               {postsElements}
            </div>
         </div>
      </div>
   )
}

const NewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={"textarea"} name={"newPost"} 
            onChange={props.onPostChange} value={props.newPostText} placeholder={"Add new post"} />
         </div>
         <div>
            <button onClick={props.onAddPost}>Add post</button>
         </div>
      </form>
   )
}

const afterSubmit = (result, dispatch) => dispatch(reset("newPost"))

const NewPostReduxForm = reduxForm({form: "newPost", onSubmitSuccess: afterSubmit})(NewPostForm);

export default MyPosts;