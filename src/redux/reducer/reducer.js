import {
  CHANGE_STAR,
  CHANGE_WATCH,
  CHANGE_FORK,
  FETCH_DATA,
  ERROR,
  REQUEST,
  NEXT_PAGE,
} from "../constant";

const initialState = {
  watch: 0,
  fork: 0,
  star: 0,
  page:1,
  issues:[], // it should be undefined or not
  loading:true
};

export function reducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case CHANGE_WATCH:
      newState.watch += action.payload;
      return newState;
    case CHANGE_STAR:
      newState.star += action.payload;
      return newState;
    case CHANGE_FORK:
      newState.fork += action.payload;
      return newState;
    case REQUEST:
      newState.loading = true;
      return newState;
    case FETCH_DATA:
      newState.loading = false;
      // newState.issues = action.payload;
      newState.issues = newState.issues.concat(action.payload);
      return newState;
    case NEXT_PAGE:
      newState.page = action.apayload;
      return newState;
    case ERROR:
      newState.loading = false;
      return newState;
    default:
      return newState;
  }
}

export default reducer;
