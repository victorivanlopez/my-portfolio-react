import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialIcons = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/victorivanlopezg" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} size='xl' />
      </a>
      <a href="https://github.com/victorivanlopez" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} size='xl' />
      </a>
    </>
  )
}