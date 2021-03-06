import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import IssueHeader from "./IssueHeader";
import IssueCard from "./IssueCard";
import { fetchIssues } from "../../redux/actions/action";
import Loader from "../loader/Loader";
function Issues() {
  const dispatch = useDispatch();
  const { loading,issues } = useSelector((state) => state);
  
  const loader = useRef(null);


  const handleObserver = useCallback(
    async (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        console.log("visible");
        dispatch(fetchIssues())  
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
        if (node && node.current) observer.observe(node.current);
        return () => observer.unobserve(node.current);
        
      },
      [handleObserver]
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
          {loading && (<Loader/>)}
        <div ref={loader} />
      </div>
    </div>
  );
}

export default Issues;
