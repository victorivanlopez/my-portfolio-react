import { ProjectsList } from './styles'; 
import { ProjectItem } from './project';

export const ProjectsSection = () => {
  return (
    <main id='projects' className="section container observer">
      <h2>Proyectos</h2>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <ProjectsList>
        <ProjectItem />
      </ProjectsList>
    </main>
  )
}