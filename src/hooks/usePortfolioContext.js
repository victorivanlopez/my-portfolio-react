import { useContext } from 'react';
import { PortfolioContext } from '../context';

export const usePortfolioContext = () => {
  return useContext(PortfolioContext);
}