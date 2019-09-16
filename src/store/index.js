import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import dataSource from './dataSource';

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(dataSource, middleware);

export default store;
export * from './dataSource';
