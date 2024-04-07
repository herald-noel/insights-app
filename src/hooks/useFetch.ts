import { useEffect, useState } from "react";
import { useFetchDataFromApi } from "../services/apiAuth";


const useFetch = (url: string, method: string, params?: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await useFetchDataFromApi(url, method, params);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [method, params]); // Re-run on changes to method, url, or params

  return { data, loading, error };

};

export default useFetch;