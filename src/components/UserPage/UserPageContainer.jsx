import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/userPageReducer";
import UserPage from "./UserPage";


let mapStateToProps = (state) => {
   return {
      users: state.userPage.users
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      }
   }
}


const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage)

export default UserPageContainer;