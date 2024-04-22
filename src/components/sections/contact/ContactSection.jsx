import { ContactContainer, ContactMean, ContactMeanContent, ContactMeans, MenuSocialContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { Form } from './form';
import { SocialIcons } from '../../ui';

export const ContactSection = () => {
  return (
    <section id='contact' className="section container observer">
      <h2>Contacto</h2>
      <p className="section-description">Todas las vías disponibles para contactarme.</p>

      <ContactContainer>
        <div>
          <h3>Enviame un mensaje</h3>
          
          <Form />
        </div>

        <div>
          <h3>Medios de contácto</h3>
          <ContactMeans>
            <ContactMean>
              <div className='mean-icon'>
                <FontAwesomeIcon icon={faMobileScreen} size='lg' />
              </div>
              <ContactMeanContent>
                <p className='mean-title'>Teléfono</p>
                <a href="tel:+3143767156">+52 3143767156</a>
              </ContactMeanContent>
            </ContactMean>

            <ContactMean>
              <div className='mean-icon'>
                <FontAwesomeIcon icon={faEnvelope} size='lg' />
              </div>
              <ContactMeanContent>
                <p className='mean-title'>Email</p>
                <a href="mailto:vlopez@victorivanlopez.com">vlopez@victorivanlopez.com</a>
              </ContactMeanContent>
            </ContactMean>

            <ContactMean>
              <div className='mean-icon'>
                <FontAwesomeIcon icon={faLocationDot} size='lg' />
              </div>
              <ContactMeanContent>
                <p className='mean-title'>Ubicación</p>
                <p>Manzanillo, Colima, México</p>
              </ContactMeanContent>
            </ContactMean>
          </ContactMeans>
          <h3>Redes Sociales</h3>
          <MenuSocialContainer>
            <SocialIcons />
          </MenuSocialContainer>
        </div>
      </ContactContainer>
    </section>
  )
}