//
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // 3 states here?
  useEffect(() => {
    // reseting the data to the default values.
    setData(undefined);
    setError(null);
    setLoading(true);

    const controller = new AbortController();
    // cancels out the first fetch request if u ask for another one.

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => setData(data))
      .catch((e) => {
        if (e.name === "AbortError") return;
        setError(true);
      })

      .finally(() => {
        if (controller.signal.aborted) return;
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
