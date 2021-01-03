import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let defaultProfile = {
   posts: [
      { id: 1, post: "Hi! How are you?", likeCount: 10 },
      { id: 2, post: "I'm fine! Thanks! And you?", likeCount: 11 },
      { id: 3, post: "I study React", likeCount: 12 }
   ],
   newPostText: "",
   profile: null,
   status: ""
}

const profilePageReducer = (state = defaultProfile, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 4,
            post: state.newPostText,
            likeCount: 0
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         };
      }
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.text
         };
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         };
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status
         };
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export const getProfileThunkCreator = (userId) => {
   return (dispatch) => {
      profileAPI.getUserProfile(userId)
         .then(data => {
            dispatch(setUserProfileAC(data));
         })
   }
}

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
   profileAPI.getUserStatus(userId)
      .then(response => {
         dispatch(setUserStatusAC(response.data));
      })
}


export const updateUserStatusThunkCreator = (status) => (dispatch) => {
   profileAPI.updateUserStatus(status)
      .then(response => {
         if(response.data.resultCode === 0) {
            dispatch(setUserStatusAC(status));
         }
      })
}

export default profilePageReducer;