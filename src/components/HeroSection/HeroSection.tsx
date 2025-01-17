import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Button = styled.a`
  margin-top: 32px;
  border-radius: 50px;
  background: #4169e1;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #4169e1;
  }
`;

const QuoteContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 3;
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  color: #333;
  font-style: italic;
  margin-bottom: 10px;
  line-height: 1.4;
  
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const QuoteAuthor = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0;
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted playsInline>
          <source src="/videos/videodrones.MP4" type="video/mp4" />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>IWIE DRONES</HeroH1>
        <HeroP>
          Soluciones profesionales con drones para tu empresa
        </HeroP>
        <Button href="#contact">
          Contáctanos
        </Button>
      </HeroContent>
      <QuoteContainer>
        <QuoteText>
          "Estaremos realmente atrapados con la tecnología cuando todo lo que queramos sean sólo cosas que funcionen."
        </QuoteText>
        <QuoteAuthor>
          – Douglas Adams
        </QuoteAuthor>
      </QuoteContainer>
    </HeroContainer>
  );
};

export default HeroSection;
