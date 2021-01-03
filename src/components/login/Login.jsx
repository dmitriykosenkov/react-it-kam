import React from "react";
import { Field, reduxForm, reset } from "redux-form";

const Login = () => {
   const onSubmit = formData => {
      console.log(formData);
   }
   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name={"login"} component={"input"} placeholder={"login"} />
         </div>
         <div>
            <Field name={"password"} component={"input"} placeholder={"password"} />
         </div>
         <div>
            <Field name={"rememberMe"} component={"input"} type="checkbox" /> Remember Me
         </div>
         <div>
            <button type="submit">Login</button>
         </div>
      </form>
   )
}
// очистка полей, и свойство onSubmitSuccess в reduxForm
const afterSubmit = (result, dispatch) => dispatch(reset('login'));

const LoginReduxForm = reduxForm({form: "login", onSubmitSuccess: afterSubmit,})(LoginForm)

export default Login;