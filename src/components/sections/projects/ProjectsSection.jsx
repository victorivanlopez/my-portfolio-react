import { ProjectsList } from './projectsList';
import { usePortfolioContext } from '../../../hooks';
import { Spinner, Alert } from '../../ui';

export const ProjectsSection = () => {

  const { projects, isLoading, hasError } = usePortfolioContext();

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