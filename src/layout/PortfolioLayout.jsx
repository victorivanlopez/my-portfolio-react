import { Header } from '../components/header';
import { Footer } from '../components/footer';
import styled from 'styled-components';

export const MainContent = styled.div`
  @media (min-width: 993px) {
    margin-left: 20rem;
  }
`;

export const PortfolioLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </>
  )
}