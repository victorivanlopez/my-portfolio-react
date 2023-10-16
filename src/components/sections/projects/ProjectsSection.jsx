import { ProjectsList } from './styles';
import { ProjectItem } from './project';
import { useFetch } from '../../../hooks';

export const ProjectsSection = () => {

  const { data: projects, isLoading } = useFetch('http://127.0.0.1:1337/api/projects?populate=*');

  return (
    <main id='projects' className="section container observer">
      <h2>Proyectos</h2>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <ProjectsList>
        {
          (isLoading)
            ? <p>Loading...</p>
            : projects?.map(project => (
              <ProjectItem key={project.id} project={project.attributes} />
            ))
        }
      </ProjectsList>
    </main>
  )
}