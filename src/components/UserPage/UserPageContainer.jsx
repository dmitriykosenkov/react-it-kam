import React from "react";
import * as axios from 'axios';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "../../redux/userPageReducer";
import { connect } from "react-redux";
import Users from './Users';
import Preloader from "../commons/preloader/preloader";



class UserPage extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
         })
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged} />
      </>
   }
}


let mapStateToProps = (state) => {
   return {
      users: state.userPage.users,
      pageSize: state.userPage.pageSize,
      totalUsersCount: state.userPage.totalUsersCount,
      currentPage: state.userPage.currentPage,
      isFetching: state.userPage.isFetching
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
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalUsers) => {
         dispatch(setTotalUsersCountAC(totalUsers))
      },
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetchingAC(isFetching))
      }
   }
}

const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage)

export default UserPageContainer;