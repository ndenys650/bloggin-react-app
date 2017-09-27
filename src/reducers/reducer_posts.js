import _ from 'lodash';
// Import all posts from API
import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';


// export all POSTS STATE as an Object
// how do we bring out the payload data as an object when it will be brought in as an array?
// lodash has built in method that does exactly what we want it to do
export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POST:

			// if we weren't using ES6 it would look like below
			// const post = action.payload.data;
			// const newState = { ...state };
			// newState[post.id] = post;
			// return newState;

			// es6 verions of above
			return { ...state, [action.payload.data.id]: action.payload.data };
		case FETCH_POSTS:
			// using lodash to restructure data as an object and pull the ID out to use as the index point
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}