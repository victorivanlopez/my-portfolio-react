import { getCurrentYear } from '../../helpers';

export const Footer = () => {
  return (
    <footer>
      <hr />
      <div>
        <p>©{getCurrentYear()} Víctor Iván López. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}