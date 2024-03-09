import { useEffect, useState } from 'react';
import { PortfolioContext } from './';

const urlProjects = `${import.meta.env.VITE_API_URL}/projects?populate=*`;
const urlSkills = `${import.meta.env.VITE_API_URL}/skills?populate=*`;

export const PortfolioProvider = ({ children }) => {

  const [projects, setProjects] = useState(null);
  const [skills, setSkills] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const startFetchingData = async () => {
    setProjects(null);
    setSkills(null);
    setIsLoading(true);
    setHasError(null);
    try {
      const [resProjects, resSkills] = await Promise.all([
        fetch(urlProjects),
        fetch(urlSkills),
      ]);
      if (resProjects.status === 404 || resSkills.status === 404) {
        setProjects(null);
        setSkills(null);
        setIsLoading(false);
        setHasError(`Error ${resp.status}: Servidor no encontrado.`);
      }
      if (resProjects.status === 200 || resSkills.status === 200) {
        const [{ data: dataProjects }, { data: dataSkills }] = await Promise.all([
          resProjects.json(),
          resSkills.json(),
        ]);
        setProjects(dataProjects);
        setSkills(dataSkills);
        setIsLoading(false);
        setHasError(null);
      }
    } catch (error) {
      setProjects(null);
      setSkills(null);
      setIsLoading(false);
      setHasError('Error en el servidor.');
    }
  }

  useEffect(() => {
    startFetchingData();
  }, [])

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        skills,
        isLoading,
        hasError,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}