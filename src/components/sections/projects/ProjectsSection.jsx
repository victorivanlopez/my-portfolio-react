import { useFetch } from '../../../hooks';
import { Spinner } from '../../../ui/components';
import { Alert } from '../../../ui/components/alert';
import { ProjectsList } from './projectsList';

export const ProjectsSection = () => {

  const { data: projects, isLoading, hasError } = useFetch('http://127.0.0.1:1337/api/projects?populate=*');

  return (
    <main id='projects' className="section container observer">
      <h2>Proyectos</h2>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      {(isLoading) && <Spinner />}
      {(projects) && <ProjectsList projects={projects} />}
      {(hasError) && <Alert message={hasError} type='error' />}
    </main>
  )
}