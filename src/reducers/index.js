import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
	// posts piece of state
	posts: PostsReducer
});

export default rootReducer;
