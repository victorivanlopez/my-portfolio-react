import { usePortfolioContext } from '../../hooks';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Modal } from '../../components/modal';
import { ProjectContent } from '../../components/sections/projects/projectContent';
import { MainContainer, MainContent } from './styles';

export const PortfolioLayout = ({ children }) => {
  const { isModalVisible } = usePortfolioContext();

  return (
    <MainContainer className={`${isModalVisible ? 'scroll-hidden' : ''}`}>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />

      {isModalVisible && (
        <Modal>
          <ProjectContent />
        </Modal>
      )}
    </MainContainer>
  )
}