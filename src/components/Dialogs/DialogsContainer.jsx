import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {
//    let state = props.store.getState().dialogsPage;

//    let addMessage = () => {
//       props.store.dispatch(addMessageActionCreator());
//    }
//    let updateMessageText = (text) => {
//       let action = updateNewMessageTextActionCreator(text);
//       props.store.dispatch(action);
//    }

//    return (
//       <Dialogs addMessage={addMessage} updateMessageText={updateMessageText}
//                dialogs={state.dialogs}
//                messages={state.messages} 
//       />
//    )
// }

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(addMessageActionCreator());
      },
      updateMessageText: (text) => {
         let action = updateNewMessageTextActionCreator(text);
         dispatch(action);
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;