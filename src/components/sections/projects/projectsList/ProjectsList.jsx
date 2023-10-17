import { Projects } from './styles';
import { ProjectItem } from '../projectItem';

export const ProjectsList = ({ projects }) => {
  return (
    <Projects>
      {
        projects?.map(project => (
          <ProjectItem key={project.id} project={project.attributes} />
        ))
      }
    </Projects>
  )
}