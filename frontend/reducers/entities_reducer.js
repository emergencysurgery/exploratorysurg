import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import PostsReducer from "./posts_reducer";
import CommentsReducer from "./comments_reducer";
import LikesReducer from "./likes_reducer";
import FriendRequestsReducer from "./friend_requests_reducer";
import FriendshipsReducer from "./friendships_reducer";


const EntitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentsReducer,
    likes: LikesReducer,
    friendRequests: FriendRequestsReducer,
    friendships: FriendshipsReducer
})

export default EntitiesReducer;