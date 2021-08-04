import React from "react";
import "./issue.css";

const IssueHeader = () => {
  return (
    <div className="issue-header">
      <div className="number-issues-container">
        <div className="number-issues-open">
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            <path
              fillRule="evenodd"
              d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
            ></path>
          </svg>
          <div className="issues-status-count">460 Open</div>
        </div>
        <div className="number-issues-closed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
            viewBox="0 0 16 16"
            version="1.1"
            aria-hidden="true"
            width="16"
            height="16"
          >
            <path
              fillRule="evenodd"
              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
            ></path>
          </svg>
          <div className="issues-status-count">8,973 Closed</div>
        </div>
      </div>
      <div className="issue-header-tabs-container">
        <div className="issue-header-button">
          Author <i className="fas fa-caret-down"></i>
        </div>
        <div className="issue-header-button ">
          Label <i className="fas fa-caret-down"></i>
        </div>
        <div className="issue-header-button ">
          Projects <i className="fas fa-caret-down"></i>
        </div>
        <div className="issue-header-button  ">
          Milestones <i className="fas fa-caret-down"></i>
        </div>
        <div className="issue-header-button ">
          Assignee <i className="fas fa-caret-down"></i>
        </div>
        <div className="issue-header-button">
          Sort <i className="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
};

export default IssueHeader;
