import { useState, useEffect, useCallback } from "react";
import * as Auth from "../Services/listofApis";

function useFetch(startLimit, endLimit) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendLimit = useCallback(async () => {
    const params = {
      _start: startLimit,
      _limit: endLimit,
    };
    try {
      await setLoading(true);
      await setError(false);
      const res = await Auth.getCards(params);
      await setList((prev) => [...new Set([...prev, ...res.data])]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [startLimit, endLimit]);

  useEffect(() => {
    sendLimit(endLimit);
  }, [endLimit, sendLimit, endLimit]);

  return { loading, error, list };
}

export default useFetch;
