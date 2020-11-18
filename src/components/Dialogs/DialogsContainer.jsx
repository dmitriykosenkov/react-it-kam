import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
   let state = props.store.getState().dialogsPage;

   let addMessage = () => {
      props.store.dispatch(addMessageActionCreator());
   }
   let updateMessageText = (text) => {
      let action = updateNewMessageTextActionCreator(text);
      props.store.dispatch(action);
   }

   return (
      <Dialogs addMessage={addMessage} updateMessageText={updateMessageText}
               dialogs={state.dialogs}
               messages={state.messages} 
      />
   )

}

export default DialogsContainer;