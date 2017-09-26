import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import promise for asynchronous nature of the request for posts aka MIDDLEWARE
import promise from 'redux-promise';

// import Router functionality tools
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
// import PostsIndex Component
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    	{/* add switch to specify what route to use expolicitly */}
    	  <Switch>
    	  	{/* bring in route for postsNew component */}
    		<Route path="/posts/new" component={PostsNew} />
    		{/* Create first route and use first imported component */}
    		<Route path="/" component={PostsIndex} />
       	  </Switch>
       	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
