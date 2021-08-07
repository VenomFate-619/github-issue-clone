import {
  CHANGE_STAR,
  CHANGE_WATCH,
  CHANGE_FORK,
  FETCH_DATA,
   ERROR,
  REQUEST,
} from "../constant";

export function changeWatch(count) {
  return { type: CHANGE_WATCH, payload: count };
}

export function changeStar(count) {
  return { type: CHANGE_STAR, payload: count };
}

export function changeFork(count) {
  return { type: CHANGE_FORK, payload: count };
}

export const fetchIssues = () => async (dispatch, getState) => {
  console.log(getState().page);
  try {
      dispatch({type:REQUEST})
      const info = await fetch(
        `https://api.github.com/repos/facebook/react/issues?per_page=7&page=${
          getState().page
        }`
      );
      const vals = await info.json();
      dispatch({ type: FETCH_DATA, payload: vals });
      return info.headers.get("Link");
  } catch (error) {
    console.log(error);
     dispatch({ type: ERROR });
  }

};
