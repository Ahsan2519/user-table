export const ADD_USER = 'ADD_USER' ;
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';


export const addUsers = (inputVal, emailVal, passwordVal)=>{
    return { type:ADD_USER , payload: {inputVal , emailVal, passwordVal} }
}
export const editUseers = (name ,email, password, editingIndex)=>{
    return { type:EDIT_USER , payload: {editingIndex , name, email , password} }
}

export const deleteUser = (idx) => {
    return { type: DELETE_USER, payload: idx };
  };
  