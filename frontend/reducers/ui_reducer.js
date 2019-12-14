import { combineReducers } from 'redux';
import editReducer from "./edit_reducer";
import modalReducer from "./modal_reducer";

export default combineReducers({
    modal: modalReducer,
    edit: editReducer
});
