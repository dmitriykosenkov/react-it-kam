import React from "react";
import dialogPageReducer from "./dialog-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import userPageReducer from "./userPageReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogPageReducer,
   sidebar: sidebarReducer,
   userPage: userPageReducer,
   auth: authReducer,
   form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;