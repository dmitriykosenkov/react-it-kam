import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileThunkCreator } from "../../redux/profile-reducer";

class ProfilePage extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId) {
          userId = 13029;
      }
      this.props.getProfileThunkCreator(userId)
   }
   render () {
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile
   }
}

let WithUrlDataProfilePage = withRouter(ProfilePage);

const ProfileContainer = connect(mapStateToProps, { getProfileThunkCreator })(WithUrlDataProfilePage);

export default ProfileContainer;