import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import IssueHeader from "./IssueHeader";
import IssueCard from "./IssueCard";
import { fetchIssues } from "../../redux/actions/action";
function Issues() {
  const dispatch = useDispatch();
  const { loading, page, issues } = useSelector((state) => state);
  console.log(loading, issues);
  // const [nextPage, setnextPage] = useState(1);
  const loader = useRef(null);


  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        const x = dispatch(fetchIssues());
        x.then((x) => {
          let y = x.split(",")[0];
          if (y.search(`rel="next"`) !== -1) {
            const url = y.slice(1, 70);
            const urlSearchParams = new URLSearchParams(url);
            console.log("lets take the page");
            // setnextPage(urlSearchParams.get("page"));
            dispatch({
              type: "NEXT_PAGE",
              payload: urlSearchParams.get("page"),
            });
          }
        });
      }
    },
    [dispatch]
  );

    const scrollObserver = useCallback(
      (node) => {
        const option = {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (node.current) observer.observe(node.current);
      },
      [dispatch, handleObserver]
    );

   useEffect(() => {
    //  const option = {
    //    root: null,
    //    rootMargin: "0px",
    //    threshold: 0,
    //  };
    //  const observer = new IntersectionObserver(handleObserver, option);
    //  if (loader.current) observer.observe(loader.current);
    scrollObserver(loader)
   }, [loader]);

  return (
    <div className="container">
      <IssueHeader />
      <div className="issue-row">
        {!loading &&
          issues.map((data, index) => (
            <IssueCard
              created_at={data.created_at}
              login={data.user.login}
              number={data.number}
              title={data.title}
              key={index}
            />
          ))}
        <div ref={loader} />
      </div>
    </div>
  );
}

export default Issues;
