import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';
import { authAPI } from '../../api/api';


class HeaderContainer extends React.Component {
   componentDidMount() {
      authAPI.authMe()
         .then(data => {
            // debugger
            if (data.resultCode === 0) {
               let { id, login, email } = data.data;
               this.props.setAuthUserData(id, login, email);
            }
         })
   }
   render() {
      return (
         <Header {...this.props} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);