
import axios from 'axios';

// define the type used in the action
export const FETCH_POSTS = 'fetch_posts';

export const CREATE_POSTS = 'create_posts';

// create constant to use instead of coding in full API URL
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=denys123'

// this action creator fetches a list of posts and returns an object
export function fetchPosts() {
	// obtain data from API url here and assign to 'request'
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		// assign api request to payload for app to recieve
		payload: request
	};
}

export function createPost(values) {
	// use axios post to put it on api
	// url is where the object goes
	// values is the object or data we want to send
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

	return {
		type: CREATE_POSTS,
		// assign api request to payload for app to recieve
		payload: request
	};
}