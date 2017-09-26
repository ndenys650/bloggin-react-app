import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
	// posts piece of state
	posts: PostsReducer,
	// wire in formReducer and assign to key of form
	form: formReducer
});

export default rootReducer;