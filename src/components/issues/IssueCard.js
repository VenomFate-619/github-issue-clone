import React ,{useRef} from "react";
import moment from "moment";
import './issue.css'


const Issues = React.memo(({ created_at, title, number, login, index }) => {
  
  let then = moment(created_at);
  let now = moment();
  let ans = then.from(now);
  return (
    <div className="issue">
      <div className="svg-and-issue">
        <svg
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
          fill="green"
        >
          <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          <path
            fillRule="evenodd"
            d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
          ></path>
        </svg>
        <h4 className="issue-title">{title}</h4>
      </div>
      <p className="issue-creator">
        #{number} opened {ans} by {login}
      </p>
    </div>
  );
});

export default Issues;
