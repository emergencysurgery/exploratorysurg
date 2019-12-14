import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import PostsErrorsReducer from "./posts_errors_reducer";

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    posts: PostsErrorsReducer
});

export default ErrorsReducer;
