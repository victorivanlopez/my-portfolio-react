import { useEffect, useState } from 'react';

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      data: null,
      isLoading: true,
      hasError: null
    });

    try {
      const resp = await fetch(url);
      if (resp.status === 404) {
        setState({
          data: null,
          isLoading: false,
          hasError: `Error ${resp.status}: Servidor no encontrado.`
        });
      }
      if (resp.status === 200) {
        const { data } = await resp.json();
        setState({
          data,
          isLoading: false,
          hasError: null,
        });
      }
    } catch (error) {
      setState({
        ...state,
        hasError: error
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state
  };
}