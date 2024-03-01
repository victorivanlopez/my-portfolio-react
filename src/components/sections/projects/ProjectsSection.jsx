import { useFetch } from '../../../hooks';
import { Spinner } from '../../../ui/components';
import { Alert } from '../../../ui/components/alert';
import { ProjectsList } from './projectsList';

export const ProjectsSection = () => {

  const { data: projects, isLoading, hasError } = useFetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`);

  return (
    <main id='projects' className="section container observer">
      <h2>Proyectos</h2>
      <p className="section-description">Mis proyectos más destacados realizados para clientes.</p>

      {(isLoading) && <Spinner />}
      {(projects) && <ProjectsList projects={projects} />}
      {(hasError) && <Alert message={hasError} type='error' />}
    </main>
  )
}