import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from "../../redux/profile-reducer";

class ProfilePage extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId) {
          userId = 13029;
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         .then(response => {
            this.props.setUserProfile(response.data);
         })
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

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataProfilePage);

export default ProfileContainer;