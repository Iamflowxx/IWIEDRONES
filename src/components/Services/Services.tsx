import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ServicesTitle = styled.h2`
  text-align: center;
  margin: 2rem 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Underline = styled.div`
  width: 100px;
  height: 4px;
  background: #4169e1;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;

const Slide = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.active ? '1' : '0'};
  transition: opacity 0.5s ease-in-out;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
`;

const SlideTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: #4169e1;
    margin: 0.5rem auto;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: #4169e1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
  
  &:hover {
    background: #2850c7;
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#4169e1' : 'white'};
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

const services = [
  {
    title: 'ENERGÍA',
    description: 'Aplicación al área de energías renovables y convencionales. Revisar las Instalaciones, granjas fotovoltaicas, torres de alta tensión, entre otras.',
    image: '/images/energia.jpg'
  },
  {
    title: 'INDUSTRIA',
    description: 'Levantamiento de datos de empresa dependiendo del área al área que se dedique. (Ej: Inventario con drones, revisión de techumbres, etc.)',
    image: '/images/industria.jpg'
  },
  {
    title: 'TELEVIGILANCIA',
    description: 'Los drones son una herramienta eficaz contra la delincuencia al vigilar grandes sectores.',
    image: '/images/televigilancia.jpg'
  },
  {
    title: 'AGRÍCOLA',
    description: 'Planimetría, fumigaciones y producción.',
    image: '/images/agricola.jpg'
  },
  {
    title: 'CAPACITACIÓN',
    description: 'Certificación DGAC, Cursos de especialización',
    image: '/images/capacitacion.jpg'
  }
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ServicesContainer>
      <ServicesTitle>NUESTROS SERVICIOS</ServicesTitle>
      <Underline />
      <SlideContainer>
        {services.map((service, index) => (
          <Slide
            key={index}
            active={currentSlide === index}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <SlideContent>
              <SlideTitle>{service.title}</SlideTitle>
              <SlideDescription>{service.description}</SlideDescription>
              <Button>SABER MÁS →</Button>
            </SlideContent>
          </Slide>
        ))}
        <Dots>
          {services.map((_, index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Dots>
      </SlideContainer>
    </ServicesContainer>
  );
};

export default Services;
