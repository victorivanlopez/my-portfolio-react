import { useEffect, useState } from 'react';
import { PortfolioContext } from './';

const urlProjects = `${import.meta.env.VITE_API_URL}/projects?populate=*`;
const urlSkills = `${import.meta.env.VITE_API_URL}/skills?populate=*`;
const urlExperiences = `${import.meta.env.VITE_API_URL}/experiences`;

export const PortfolioProvider = ({ children }) => {

  const [projects, setProjects] = useState(null);
  const [skills, setSkills] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const startFetchingData = async () => {
    setProjects(null);
    setSkills(null);
    setExperiences(null);
    setIsLoading(true);
    setHasError(null);
    try {
      const [resProjects, resSkills, resExperiences] = await Promise.all([
        fetch(urlProjects),
        fetch(urlSkills),
        fetch(urlExperiences),
      ]);
      if (resProjects.status === 404 || resSkills.status === 404 || resExperiences.status === 404) {
        setProjects(null);
        setSkills(null);
        setExperiences(null);
        setIsLoading(false);
        setHasError(`Servidor no encontrado.`);
        return;
      }
      if (resProjects.status === 401 || resSkills.status === 401 || resExperiences.status === 401) {
        setProjects(null);
        setSkills(null);
        setExperiences(null);
        setIsLoading(false);
        setHasError(`Ha ocurrido un error en el servidor.`);
        return;
      }
      if (resProjects.status === 200 || resSkills.status === 200 || resExperiences.status === 200) {
        const [{ data: dataProjects }, { data: dataSkills }, { data: dataExperiences }] = await Promise.all([
          resProjects.json(),
          resSkills.json(),
          resExperiences.json(),
        ]);
        setProjects(dataProjects);
        setSkills(dataSkills);
        setExperiences(dataExperiences);
        setIsLoading(false);
        setHasError(null);
      }
    } catch (error) {
      setProjects(null);
      setSkills(null);
      setExperiences(null);
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
        experiences,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}