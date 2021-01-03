import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount} key={p.id} />);

   const onSubmit = formData => {
      props.addPost(formData.newPost);
   }
   return (
      <div className={s.postsBlock}>
         <h3>Posts</h3>
         <div>
            <NewPostReduxForm onSubmit={onSubmit} />
            <div className={s.posts}>
               {postsElements}
            </div>
         </div>
      </div>
   )
}

const AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={"textarea"} name={"newPost"} placeholder={"Add new post"} />
         </div>
         <div>
            <button>Add post</button>
         </div>
      </form>
   )
}

const afterSubmit = (result, dispatch) => dispatch(reset("newPost"))

const NewPostReduxForm = reduxForm({form: "newPost", onSubmitSuccess: afterSubmit})(AddNewPostForm);

export default MyPosts;