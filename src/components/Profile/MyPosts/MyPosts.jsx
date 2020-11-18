import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount} />);

   let newPostRef = React.createRef();

   let onAddPost = () => {
      props.addPost();
   }
   let onPostChange = (e) => {
      let text = newPostRef.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <div>
                  <textarea onChange={onPostChange} ref={newPostRef} value={props.newPostText}/>
               </div>
               <div>
                  <button onClick={onAddPost}>Add message</button>
               </div>
            </div>
            <div className={s.posts}>
               {postsElements}
            </div>
         </div>
      </div>
   )
}

export default MyPosts;