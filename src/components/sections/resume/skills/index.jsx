import { ResumeSkill } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons';

export const SkillsList = () => {
  return (
    <>
      <ResumeSkill className='scale-up-top'>
        <FontAwesomeIcon icon={faFigma} />
        <h3>Maquetación y Diseño</h3>
      </ResumeSkill>
      <ResumeSkill className='scale-up-top'>
        <FontAwesomeIcon icon={faReact} />
        <h3>Desarrollo con React</h3>
      </ResumeSkill>
      <ResumeSkill className='scale-up-top'>
        <FontAwesomeIcon icon={faDatabase} />
        <h3>Manejo de bases de datos</h3>
      </ResumeSkill>
      <ResumeSkill className='scale-up-top'>
        <FontAwesomeIcon icon={faCodeBranch} />
        <h3>Uso de Git y GitHub</h3>
      </ResumeSkill>
    </>
  )
}