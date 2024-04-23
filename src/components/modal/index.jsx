import { useRef } from 'react';
import { usePortfolioContext } from '../../hooks';
import { ContainerModal, ContentModal, IconContainerModal } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({ children }) => {
  const { hiddenModal } = usePortfolioContext();
  const element = useRef(null)

  const onClickModal = (e) => {
    if (e.target === element.current) {
      hiddenModal();
    }
  }

  return (
    <ContainerModal
      ref={element}
      onClick={onClickModal}
    >
      <ContentModal className='scale-up-center'>
        <IconContainerModal
          onClick={hiddenModal}
        >
          <FontAwesomeIcon icon={faX} size='lg' color='#575655' />
        </IconContainerModal>
        {children}
      </ContentModal>
    </ContainerModal>
  )
}