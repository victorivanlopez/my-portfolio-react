import { Footer, Header } from '../components';

export const PortfolioLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}