import { useEffect, useState } from 'react';

export const useFetch = (url, nameLS) => {

  const [data, setData] = useState(() => {
    if (nameLS) {
      return JSON.parse(localStorage.getItem(nameLS)) ?? null;
    } else {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const getFetch = async () => {
    setData(null);
    setIsLoading(true);
    setHasError(null);

    try {
      const resp = await fetch(url);
      if (resp.status === 404) {
        setData(null);
        setIsLoading(false);
        setHasError(`Error ${resp.status}: Servidor no encontrado.`);
      }
      if (resp.status === 200) {
        const { data } = await resp.json();
        setData(data);
        setIsLoading(false);
        setHasError(null);
        setIsRealoaded(true);
        if (nameLS) {
          localStorage.setItem(nameLS, JSON.stringify(data) ?? null);
        }
      }
    } catch (error) {
      setData(null);
      setIsLoading(false);
      setHasError('Error en el servidor.');
    }
  };

  useEffect(() => {
    if (data === null) {
      getFetch();
    }
  }, [url, nameLS]);

  return {
    data,
    isLoading,
    hasError,
  };
}