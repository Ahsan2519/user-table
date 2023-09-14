import { ADD_USER, EDIT_USER, DELETE_USER } from "../Actions/userAction";
import { produce } from "immer";
const storedValue = localStorage.getItem("user");
const initialUser = storedValue ? JSON.parse(storedValue) : [];

const initialState = initialUser;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return produce(state, (draft) => {
        draft.push({
          id: state.length + 1,
          name: action.payload.inputVal,
          email: action.payload.emailVal,
          password: action.payload.passwordVal,
        });
      });

    case DELETE_USER:
      return state.filter((del) => del.id !== action.payload);

      case EDIT_USER :
        return produce(state, (draft)=>{
          draft.find(edit =>{
            if(edit.id === action.payload.editingIndex){
              edit.id = action.payload.editingIndex;
              edit.name = action.payload.name;
              edit.email = action.payload.email;
              edit.password = action.payload.password;
            }
          })
        
        })

    default:
      return state;
  }
};

export default userReducer;
