import { useRef } from 'react';
import { usePortfolioContext } from '../../hooks';
import { ContainerModal, ContentModal } from './styles';

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
        {children}
      </ContentModal>
    </ContainerModal>
  )
}