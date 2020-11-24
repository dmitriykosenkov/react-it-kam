const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let defaultDialogs = {
   dialogs: [
      { id: 1, name: "Дима" },
      { id: 2, name: "Лена" },
      { id: 3, name: "Андрей" },
      { id: 4, name: "Иван" }
   ],
   messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "How are you?" }
   ],
   newMessageText: ""
}


const dialogPageReducer = (state = defaultDialogs, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = state.newMessageText;
         return {
            ...state,
            messages: [...state.messages, { id: 6, message: newMessage }],
            newMessageText: ""
         };
      case UPDATE_MESSAGE_TEXT: {
         return {
            ...state,
            newMessageText: action.text
         };
      }
      default:
         return state;
   }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) =>
   ({ type: UPDATE_MESSAGE_TEXT, text: text });

export default dialogPageReducer;