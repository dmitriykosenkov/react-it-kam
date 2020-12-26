import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
   return {
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText,
      dialogs: state.dialogsPage.dialogs,
      isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;