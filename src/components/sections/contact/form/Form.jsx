import { useState } from 'react';
import { ContactFormButton, ContactFormContainer, ContactFormField } from './styles';

import { useForm } from '../../../../hooks/useForm';
import { Spinner } from '../../../../ui/components';
import { Alert } from '../../../../ui/components/alert';

const formValidations = {
  name: [(value) => value.length >= 1, 'El nombre es obligatorio'],
  email: [(value) => value.length >= 1, 'La email es obligatorio'],
  subject: [(value) => value.length >= 1, 'La asunto es obligatorio'],
  message: [(value) => value.length >= 1, 'La mensaje es obligatorio'],
}

const formData = {
  name: '',
  tel: '',
  email: '',
  subject: '',
  message: '',
}

export const Form = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(null);
  const [hasError, setHasError] = useState(null);

  const {
    name, tel, email, subject, message, formState, onInputChange, onResetForm,
    nameValid, emailValid, subjectValid, messageValid, isFormValid
  } = useForm(formData, formValidations);

  const onSendEmail = async (e) => {
    e.preventDefault();

    setHasError(null);
    setHasSuccess(null);
    setFormSubmitted(true);
    if (!isFormValid) return;

    try {
      setIsLoading(true);
      const resp = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (resp.status === 200) {
        const responseData = await resp.json();
        setIsLoading(false);
        setFormSubmitted(false);
        setHasSuccess(responseData.message);
        onResetForm();
      } else {
        setIsLoading(false);
        setHasError('No se pudo enviar el correo');
      }
    } catch (error) {
      setIsLoading(false);
      setHasError('Error al enviar el correo');
    }
  }

  return (
    <>
      <ContactFormContainer
        onSubmit={onSendEmail}
      >
        <ContactFormField>
          <label htmlFor="name">Nombre Completo<span>*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={onInputChange}
          />
          {nameValid && formSubmitted && <span className='error'>{nameValid}</span>}
        </ContactFormField>
        <ContactFormField>
          <label htmlFor="tel">Teléfono</label>
          <input
            id="tel"
            name="tel"
            type="tel"
            value={tel}
            onChange={onInputChange}
          />
        </ContactFormField>
        <ContactFormField>
          <label htmlFor="email">Correo electrónico<span>*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={onInputChange}
          />
          {emailValid && formSubmitted && <span className='error'>{emailValid}</span>}
        </ContactFormField>
        <ContactFormField>
          <label htmlFor="subject">Asunto<span>*</span></label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={subject}
            onChange={onInputChange}
          />
          {subjectValid && formSubmitted && <span className='error'>{subjectValid}</span>}
        </ContactFormField>
        <ContactFormField>
          <label htmlFor="message">Mensaje<span>*</span></label>
          <textarea
            name="message"
            id="message"
            required
            cols={40}
            rows={5}
            value={message}
            onChange={onInputChange}
          ></textarea>
          {messageValid && formSubmitted && <span className='error'>{messageValid}</span>}
        </ContactFormField>

        <ContactFormButton type="submit" value="Enviar Mensaje" />
      </ContactFormContainer>

        {isLoading && <Spinner />}
        {hasSuccess && <Alert message={hasSuccess} />}
        {hasError && <Alert message={hasError} type='error' />}
    </>
  )
}