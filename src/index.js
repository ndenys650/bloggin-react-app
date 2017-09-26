import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import Router functionality tools
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
// import PostsIndex Component
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		{/* Create first route and use first imported component */}
    		<Route path="/" component={PostsIndex} />
       	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
