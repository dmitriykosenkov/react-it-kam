import React from "react";
import dialogPageReducer from "./dialog-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import userPageReducer from "./userPageReducer";
import { createStore, combineReducers } from "redux";

let reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogPageReducer,
   sidebar: sidebarReducer,
   userPage: userPageReducer
})

let store = createStore(reducers)

window.store = store;

export default store;