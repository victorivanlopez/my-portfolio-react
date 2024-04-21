import { ProjectItem } from '../projectItem';
import { Projects } from './styles';

export const ProjectsList = ({ projects }) => {
  return (
    <Projects>
      {
        (projects.length < 1)
          ? <p>Aún no hay proyectos.</p>
          : projects?.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))
      }
    </Projects>
  )
}