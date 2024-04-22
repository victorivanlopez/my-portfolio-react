import { AlertContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export const Alert = ({ message, type = 'success' }) => {
  return (
    <AlertContainer type={type}>
      {
        type === 'success'
          ? <FontAwesomeIcon icon={faCircleCheck} />
          : <FontAwesomeIcon icon={faCircleExclamation} />
      }
      <p>{message}</p>
    </AlertContainer>
  )
}