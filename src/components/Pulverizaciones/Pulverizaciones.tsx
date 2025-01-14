import React from 'react';
import styled from 'styled-components';

const PulverizacionesContainer = styled.div`
  padding: 80px 0;
  background: white;
`;

const PulverizacionesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const PulverizacionesTitle = styled.h2`
  font-size: 2.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 60px;
`;

const ServiciosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServicioCard = styled.div`
  position: relative;
  background: #f9f9f9;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ServicioContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: transform 0.3s ease;

  ${ServicioCard}:hover & {
    transform: scale(1.1);
  }
`;

const ServicioIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  ${ServicioCard}:hover & {
    transform: translateY(-10px);
  }
`;

const ServicioTitle = styled.h3`
  font-size: 1.4rem;
  color: #000;
  margin: 0;
  text-align: center;
`;

const ServicioInfo = styled.div<{ isHovered: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(65, 105, 225, 0.95);
  color: white;
  padding: 20px;
  transform: translateY(${props => props.isHovered ? '0' : '100%'});
  transition: transform 0.3s ease;
`;

const ServicioDescription = styled.p`
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const servicios = [
  {
    title: 'Hortalizas',
    icon: '🥬',
    description: 'Pulverización precisa para cultivos de hortalizas'
  },
  {
    title: 'Leguminosas',
    icon: '🌱',
    description: 'Tratamiento especializado para legumbres'
  },
  {
    title: 'Cereales',
    icon: '🌾',
    description: 'Cobertura uniforme para campos de cereales'
  },
  {
    title: 'Cultivos forrajeros',
    icon: '🌿',
    description: 'Optimización de cultivos para forraje'
  },
  {
    title: 'Viñedos en espaldera',
    icon: '🍇',
    description: 'Precisión en viñedos con sistema de espaldera'
  },
  {
    title: 'Parronales',
    icon: '🍷',
    description: 'Cobertura completa para parronales'
  },
  {
    title: 'Nogales',
    icon: '🥜',
    description: 'Tratamiento especializado para nogales'
  },
  {
    title: 'Cerezos',
    icon: '🍒',
    description: 'Pulverización precisa para huertos de cerezos'
  }
];

const ServicioCardComponent = ({ servicio }: { servicio: typeof servicios[0] }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <ServicioCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ServicioContent>
        <ServicioIcon>{servicio.icon}</ServicioIcon>
        <ServicioTitle>{servicio.title}</ServicioTitle>
      </ServicioContent>
      <ServicioInfo isHovered={isHovered}>
        <ServicioDescription>{servicio.description}</ServicioDescription>
      </ServicioInfo>
    </ServicioCard>
  );
};

const Pulverizaciones = () => {
  return (
    <PulverizacionesContainer id="pulverizaciones">
      <PulverizacionesWrapper>
        <PulverizacionesTitle>Pulverizaciones de</PulverizacionesTitle>
        <ServiciosGrid>
          {servicios.map((servicio, index) => (
            <ServicioCardComponent key={index} servicio={servicio} />
          ))}
        </ServiciosGrid>
      </PulverizacionesWrapper>
    </PulverizacionesContainer>
  );
};

export default Pulverizaciones;
