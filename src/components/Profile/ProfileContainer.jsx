import React from 'react';
import Profile from './Profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileThunkCreator } from "../../redux/profile-reducer";
import withAuthRedirectComponent from '../../hoc/authRedirect';

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
      profile: state.profilePage.profile,
   }
}

export default compose(
   connect(mapStateToProps, { getProfileThunkCreator }),
   withRouter,
   // withAuthRedirectComponent
)(ProfilePage)

