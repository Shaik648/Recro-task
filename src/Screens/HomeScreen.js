import React, { useState, useEffect, useRef, useCallback } from "react";
import * as Auth from "../Services/listofApis";
import HomeComponent from "../Components/HomeComponent";
import useFetch from "./useFetch";

function HomeScreen() {
  const [startLimit, setStartLimit] = useState(1);
  const [endLimit, setEndLimit] = useState(10);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(startLimit, endLimit);

  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setEndLimit((prev) => prev + 18);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="container-fluid">
      <HomeComponent
        responseList={list}
        loading={loading}
        error={error}
        loader={loader}
      />
    </div>
  );
}

export default HomeScreen;
