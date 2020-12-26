import React from 'react';
import { connect } from 'react-redux';
import withAuthRedirectComponent from '../../hoc/authRedirect';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
   return {
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText,
      dialogs: state.dialogsPage.dialogs
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(addMessageActionCreator());
      },
      updateMessageText: (text) => {
         dispatch(updateNewMessageTextActionCreator(text));
      }
   }
}

let authRedirectComponent = withAuthRedirectComponent(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;