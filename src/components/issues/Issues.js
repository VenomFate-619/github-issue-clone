import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import IssueHeader from "./IssueHeader";
import IssueCard from "./IssueCard";
import { fetchIssues } from "../../redux/actions/action";
function Issues() {
  const dispatch = useDispatch();
  const { loading, page, issues } = useSelector((state) => state);
  // const [nextPage, setnextPage] = useState(1);
  const loader = useRef(null);


  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        console.log("visible");
        const x = dispatch(fetchIssues());
        console.log(x);
        x.then((x) => {
          let y = x.split(",")[0];
          if (y.search(`rel="next"`) !== -1) {
            const url = y.slice(1, 70);
            const urlSearchParams = new URLSearchParams(url);
            // setnextPage(urlSearchParams.get("page"));
            console.log(urlSearchParams.get("page"));
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
   }, [loader,scrollObserver]);

  return (
    <div className="container">
      <IssueHeader />
      <div className="issue-row">
        {
          issues.map((data, index) => (
            <IssueCard
              created_at={data.created_at}
              login={data.user.login}
              number={data.number}
              title={data.title}
              key={index}
              index={index}
            />
          ))}
          {loading && (<div>loading</div>)}
        <div ref={loader} />
      </div>
    </div>
  );
}

export default Issues;
