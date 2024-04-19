import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Modal } from '../../components/modal';
import { usePortfolioContext } from '../../hooks';
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

      {isModalVisible && <Modal />}
    </MainContainer>
  )
}