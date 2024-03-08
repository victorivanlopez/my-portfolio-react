import { PortfolioContext } from './';

export const PortfolioProvider = ({ children }) => {
  return (
    <PortfolioContext.Provider
      value={{}}
    >
      {children}
    </PortfolioContext.Provider>
  )
}