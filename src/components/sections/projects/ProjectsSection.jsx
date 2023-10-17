import { useFetch } from '../../../hooks';
import { Spinner } from '../../../ui/components';
import { ProjectsList } from './projectsList';

export const ProjectsSection = () => {

  const { data: projects, isLoading, hasError } = useFetch('http://127.0.0.1:1337/api/projects?populate=*');

  return (
    <main id='projects' className="section container observer">
      <h2>Proyectos</h2>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      {(hasError) && <p>{hasError}</p>}

      {
        (isLoading)
          ? <Spinner />
          : <ProjectsList projects={projects} />
      }
    </main>
  )
}