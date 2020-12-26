import React from "react";
import {
   followThunkCreator,
   setTotalUsersCount,
   unfollowThunkCreator,
   getUsersThunkCreator,
   toggleFollowingProgress
} from "../../redux/userPageReducer";
import { connect } from "react-redux";
import Users from './Users';
import Preloader from "../commons/preloader/preloader";
import withAuthRedirectComponent from "../../hoc/authRedirect";
class UserPage extends React.Component {
   componentDidMount() {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
   }
   onPageChanged = (pageNumber) => {
      this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
   }
   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            followThunkCreator={this.props.followThunkCreator}
            unfollowThunkCreator={this.props.unfollowThunkCreator}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

let authRedirect = withAuthRedirectComponent(UserPage);

let mapStateToProps = (state) => {
   return {
      users: state.userPage.users,
      pageSize: state.userPage.pageSize,
      totalUsersCount: state.userPage.totalUsersCount,
      currentPage: state.userPage.currentPage,
      isFetching: state.userPage.isFetching,
      followingInProgress: state.userPage.followingInProgress
   }
}

const UserPageContainer = connect(mapStateToProps,
   {
      getUsersThunkCreator, followThunkCreator, unfollowThunkCreator,
      setTotalUsersCount, toggleFollowingProgress
   })(authRedirect)

export default UserPageContainer;