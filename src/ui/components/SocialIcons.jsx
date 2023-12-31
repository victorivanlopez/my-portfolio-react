import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const SocialIcons = () => {
  return (
    <>
      <a href="https://mx.linkedin.com/" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} size='xl' />
      </a>
      <a href="https://github.com/victorivanlopez" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} size='xl' />
      </a>
    </>
  )
}