import React from "react";
import dialogPageReducer from "./dialog-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import userPageReducer from "./userPageReducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogPageReducer,
   sidebar: sidebarReducer,
   userPage: userPageReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;