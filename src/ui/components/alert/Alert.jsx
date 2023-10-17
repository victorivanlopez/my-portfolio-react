import React from 'react';
import { AlertContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export const Alert = ({ message, type = 'success' }) => {
  return (
    <AlertContainer type={type}>
      <FontAwesomeIcon icon={faCircleExclamation} />
      <p>{message}</p>
    </AlertContainer>
  )
}