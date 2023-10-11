import { ContactContainer, ContactFormButton, ContactFormContainer, ContactFormField, ContactMean, ContactMeanContent, ContactMeans, MenuSocialContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

export const ContactSection = () => {
  return (
    <section className="section container">
      <h2>Contacto</h2>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <ContactContainer>
        <div>
          <h3>Enviame un mensaje</h3>
          <ContactFormContainer>
            <ContactFormField>
              <label htmlFor="name">Nombre Completo<span>*</span></label>
              <input id='name' type="text" />
            </ContactFormField>
            <ContactFormField>
              <label htmlFor="tel">Teléfono</label>
              <input id='tel' type="tel" />
            </ContactFormField>
            <ContactFormField>
              <label htmlFor="email">Correo electrónico<span>*</span></label>
              <input id='email' type="email" />
            </ContactFormField>
            <ContactFormField>
              <label htmlFor="subject">Asunto<span>*</span></label>
              <input id='subject' type="text" />
            </ContactFormField>
            <ContactFormField>
              <label htmlFor="message">Mensaje<span>*</span></label>
              <textarea name="message" id="message" cols={40} rows={10}></textarea>
            </ContactFormField>

            <ContactFormButton type="submit" value="Enviar Mensaje" />
          </ContactFormContainer>
        </div>

        <div>
          <h3>Medios de contácto</h3>
          <ContactMeans>
            <ContactMean>
              <div className='mean-icon'>
                <FontAwesomeIcon icon={faMobileScreen} size='lg' />
              </div>
              <ContactMeanContent>
                <p className='mean-title'>Telefono</p>
                <a href="tel:+3143767156">3143767156</a>
              </ContactMeanContent>
            </ContactMean>

            <ContactMean>
              <div className='mean-icon'>
                <FontAwesomeIcon icon={faEnvelope} size='lg' />
              </div>
              <ContactMeanContent>
                <p className='mean-title'>Email</p>
                <a href="mailto:victor_ivan2211@hotmail.com">victor_ivan2211@hotmail.com</a>
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
            <a href="https://mx.linkedin.com/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size='xl' />
            </a>
            <a href="https://github.com/victorivanlopez" target="_blank">
              <FontAwesomeIcon icon={faGithub} size='xl' />
            </a>
          </MenuSocialContainer>
        </div>
      </ContactContainer>
    </section>
  )
}