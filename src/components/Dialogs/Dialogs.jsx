import React from 'react';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {
   let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
   let messagesElements = props.messages.map(m => <Message message={m.message} />);

   let addMessage = () => {
      props.addMessage();
   }
   let updateMessageText = (e) => {
      let text = e.target.value
      props.updateMessageText(text)
   }

   if(!props.isAuth) return <Redirect to="login"/>

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div>
               {messagesElements}
            </div>
            <div>
               <div>
                  <textarea onChange={updateMessageText} value={props.newMessageText}/>
               </div>
               <div>
                  <button onClick={addMessage}>Add message</button>
               </div>
            </div>
         </div>

      </div>
   )

}

export default Dialogs;