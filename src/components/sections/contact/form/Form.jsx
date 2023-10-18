import { ContactFormButton, ContactFormContainer, ContactFormField } from './styles';

export const Form = () => {
  return (
    <ContactFormContainer>
      <ContactFormField>
        <label htmlFor="name">Nombre Completo<span>*</span></label>
        <input id="name" name="name" type="text" />
      </ContactFormField>
      <ContactFormField>
        <label htmlFor="tel">Teléfono</label>
        <input id="tel" name="tel" type="tel" />
      </ContactFormField>
      <ContactFormField>
        <label htmlFor="email">Correo electrónico<span>*</span></label>
        <input id="email" name="email" type="email" />
      </ContactFormField>
      <ContactFormField>
        <label htmlFor="subject">Asunto<span>*</span></label>
        <input id="subject" name="subject" type="text" />
      </ContactFormField>
      <ContactFormField>
        <label htmlFor="message">Mensaje<span>*</span></label>
        <textarea name="message" id="message" cols={40} rows={5}></textarea>
      </ContactFormField>

      <ContactFormButton type="submit" value="Enviar Mensaje" />
    </ContactFormContainer>
  )
}