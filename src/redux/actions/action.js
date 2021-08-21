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

let abortController = new AbortController();

export const fetchIssues = () => async (dispatch, getState) => {
   abortController.abort(); // Cancel the previous request
   abortController = new AbortController();

  try {
      dispatch({type:REQUEST})
      const info = await fetch(
        `https://api.github.com/repos/facebook/react/issues?per_page=7&page=${
          getState().page
        }`,
        { signal: abortController.signal }
      );

      const vals = await info.json();
      dispatch({ type: FETCH_DATA, payload: vals });
      let y = info.headers.get("Link").split(",");
      let x = y.filter((p, i) => {
        if (p.search(`rel="next"`) !== -1) return p;
      });
      if (x.length > 0) {
        // y[0].slice(1,y[0].search(`rel="next"`)-1)
        x = x[0].trim()
        console.log(x);
        const url = x.slice(1, x.search(`rel="next"`) - 3);
        const urlSearchParams = new URLSearchParams(url);
        console.log(urlSearchParams.get("page"));
        dispatch({
          type: "NEXT_PAGE",
          payload: urlSearchParams.get("page"),
        });
      }
  } catch (error) {
     console.log(error);
      if (error?.name === 'AbortError') return ;
        else  dispatch({ type: ERROR });
    
  }

};
