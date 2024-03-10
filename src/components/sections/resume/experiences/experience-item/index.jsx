import { ResumeExperience, ResumeExperienceHeader } from './styles';

export const ExperienceItem = ({ experience }) => {
  return (
    <ResumeExperience className='scale-up-top'>
      <ResumeExperienceHeader>
        <p>{experience.date}</p>
        <p>{experience.place}</p>
      </ResumeExperienceHeader>
      <h3>{experience.title}</h3>
      <p className="company">{experience.company}</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis autem minima velit quibusdam vero.</p>
    </ResumeExperience>
  )
}