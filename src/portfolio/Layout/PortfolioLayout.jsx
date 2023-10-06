import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const PortfolioLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}