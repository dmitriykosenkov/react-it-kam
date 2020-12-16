import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';


class HeaderContainer extends React.Component {
   componentDidMount() {

      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true,
         headers: {
            "API-KEY": "ba964194-f87c-4642-b2f3-156ec9ed6f7e"
         }
      })
         .then(response => {
            debugger
            if (response.data.resultCode === 0) {
               let { id, login, email } = response.data.data;
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