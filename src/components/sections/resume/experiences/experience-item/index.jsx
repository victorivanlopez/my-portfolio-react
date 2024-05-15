import { ResumeExperience, ResumeExperienceHeader } from './styles';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const ExperienceItem = ({ experience }) => {

  const { date, place, title, company, description } = experience;

  return (
    <ResumeExperience className='scale-up-vertical-center'>
      <ResumeExperienceHeader>
        <p>{date}</p>
        <p>{place}</p>
      </ResumeExperienceHeader>
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <BlocksRenderer content={description} />
    </ResumeExperience>
  )
}