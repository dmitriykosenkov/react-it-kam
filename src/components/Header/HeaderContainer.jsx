import React from 'react';
import { connect } from 'react-redux';
import { authMeThunkCreator, logoutThunkCreator } from '../../redux/auth-reducer';
import Header from './Header';
class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.authMeThunkCreator()
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

export default connect(mapStateToProps, { authMeThunkCreator, logoutThunkCreator })(HeaderContainer);