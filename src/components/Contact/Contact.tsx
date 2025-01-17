import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 80px 0;
  background: #f9f9f9;
`;

const ContactWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
`;

const ContactTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 48px;
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 120px;
`;

const SubmitButton = styled.button`
  background: #4169e1;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;

  &:hover {
    background: #3457b2;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  gap: 24px;
`;

const SocialIcon = styled.a`
  color: #000;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #4169e1;
  }
`;

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactTitle>¡Contáctanos!</ContactTitle>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput type="text" placeholder="Nombre Completo" required />
          </FormGroup>
          <FormGroup>
            <FormInput type="email" placeholder="Dirección de correo electrónico" required />
          </FormGroup>
          <FormGroup>
            <FormInput type="text" placeholder="Asunto" required />
          </FormGroup>
          <FormGroup>
            <FormTextarea placeholder="Tu mensaje" required />
          </FormGroup>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </ContactForm>

        <SocialLinks>
          <SocialIcon href="https://instagram.com" target="_blank">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://tiktok.com" target="_blank">
            <FaTiktok />
          </SocialIcon>
          <SocialIcon href="https://youtube.com" target="_blank">
            <FaYoutube />
          </SocialIcon>
        </SocialLinks>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
