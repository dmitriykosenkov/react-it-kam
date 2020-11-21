import dialogPageReducer from "./dialog-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogPageReducer,
   sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store;