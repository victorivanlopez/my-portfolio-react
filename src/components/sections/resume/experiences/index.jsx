import { ResumeExperience } from './styles';

export const ExperiencesList = () => {
  return (
    <>
      <ResumeExperience className='scale-up-top'>
        <p className="dates">2021 - 2023</p>
        <h3>Freelancer</h3>
        <p className="company">victorivanlopez.com</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis autem minima velit quibusdam vero.</p>
      </ResumeExperience>

      <ResumeExperience className='scale-up-top'>
        <p className="dates">2018 - 2020</p>
        <h3>Coordinador de Informática</h3>
        <p className="company">ASIPONA Manzanillo</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis autem minima velit quibusdam vero.</p>
      </ResumeExperience>
    </>
  )
}