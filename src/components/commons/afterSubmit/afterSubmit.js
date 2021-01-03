import { reset } from "redux-form";

const clearInputField = (result, dispatch) => dispatch(reset(result));

export default clearInputField;