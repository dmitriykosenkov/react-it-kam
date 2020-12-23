const SET_FRIENDS = "SET_FRIENDS";
const SET_CURRENT_FRIENDS = "SET_CURRENT_FRIENDS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let defaultSidebar = {
   friends: [],
   pageSize: 9,
   currentFriend: null,
   isFetching: true,
}

const sidebarReducer = (state = defaultSidebar, action) => {
   switch (action.type) {
      case SET_FRIENDS:
         return {
            ...state,
            friends: [...action.friends],
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }
      default:
         return state;
   }

}

export const setFriends = (friends) => ({ type: SET_FRIENDS, friends })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default sidebarReducer;