import { createStore } from "redux";
import userReducer from "../reducers/userReducer";

const Store =  createStore(userReducer);

export default Store