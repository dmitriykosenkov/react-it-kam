import React from 'react';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';


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
   const onSubmit = values => {
      // props.updateMessageText(formData)
      // props.addMessage(values.newDialog);
      console.log(values);
   }
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div>
               {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={onSubmit} />
         </div>
      </div>
   )

}

const DialogsForm = (props) => {
   return (
      // handleSubmit приходит из reduxForm после оборачивания ею DialogsForm
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={"textarea"} name={"newDialog"} />
         </div>
         <div>
            <button type="submit">Add message</button>
         </div>
      </form>
   )
}

const afterSubmit = (result, dispatch) => dispatch(reset("newDialog"))
const DialogsReduxForm = reduxForm({ form: "newDialog", onSubmitSuccess: afterSubmit })(DialogsForm)

export default Dialogs;