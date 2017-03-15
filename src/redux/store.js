import { createStore, compose } from 'redux';
import * as reduxLoop from 'redux-loop';
import reducer from './reducer';

const enhancer = compose(
  reduxLoop.install(),
);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer,
);

export default store;
