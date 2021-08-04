import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import github from './reducer/reducer';

const initialState = {
  watch: 0,
  fork: 0,
  star: 0,
  page: 1,
  issues: [], // it should be undefined or not
  loading: true,
};

const store = createStore(github,initialState,applyMiddleware(thunk)) ;

export default store;