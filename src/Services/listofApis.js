import axios from "axios";
import React from "react";

export const getCards = (params) => {
  console.log("params", params);
  const BASE_URL = `https://jsonplaceholder.typicode.com/posts?_start=${params._start}&_limit=${params._limit}`;
  console.log("base", BASE_URL);

  return axios.get(BASE_URL).catch((err) => console.log("err", err));
};
