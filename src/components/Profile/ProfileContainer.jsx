import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profile-reducer";

class ProfilePage extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfilePage)

export default ProfileContainer;