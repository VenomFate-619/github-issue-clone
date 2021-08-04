import React from 'react'
// import './filternav.css'
function FilterNav() {
    return (
      <div className="nav">
        <div className="filter">
          <p>
            Filters
            <span className="dropdown-caret"></span>
          </p>
        </div>
        <div className="search">
          <input type="text" placeholder="is:issue is:open " />
        </div>
        <div className="other">
          <p id="first">
            Labels
            <span>5</span>
          </p>
          <p id="second">
            Milestones
            <span>10</span>
          </p>
        </div>
        <div className="newIssue">
          <p>New Issue</p>
        </div>
      </div>
    );
}

export default FilterNav
