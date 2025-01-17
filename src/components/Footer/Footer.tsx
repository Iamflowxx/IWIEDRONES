import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #fff;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
`;

const FooterLogo = styled.div`
  margin-bottom: 16px;
  img {
    height: 80px;
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  gap: 20px;
`;

const SocialIconLink = styled.a`
  color: #666;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #4169e1;
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src="/images/logo-iwiedrones.jpg" alt="IWIE SPACE" />
      </FooterLogo>
      <FooterText>
        Creatividad y Desarrollo Colaborativo
      </FooterText>
      <SocialIcons>
        <SocialIconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink href="https://tiktok.com" target="_blank" aria-label="TikTok">
          <FaTiktok />
        </SocialIconLink>
      </SocialIcons>
      <Copyright>
        Copyright {new Date().getFullYear()} - Todos los derechos reservados
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
