import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyles } from '../styles/globalStyles';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}