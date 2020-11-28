import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/userPageReducer";
import UserPageC from "./UserPageC";


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


const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPageC)

export default UserPageContainer;