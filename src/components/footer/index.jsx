import { getCurrentYear } from '../../helpers';
import { Content, Copyright } from './styles';

export const Footer = () => {
  return (
    <footer className='container'>
      <hr />
      <Content>
        <Copyright>©{getCurrentYear()} Víctor Iván López. Todos los derechos reservados.</Copyright>
      </Content>
    </footer>
  )
}