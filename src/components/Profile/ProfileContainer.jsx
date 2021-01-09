import React from "react";
import Profile from "./Profile";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
} from "../../redux/profile-reducer";
import withAuthRedirectComponent from "../../hoc/authRedirect";

class ProfilePage extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
  }),
  withRouter
  // withAuthRedirectComponent
)(ProfilePage);
