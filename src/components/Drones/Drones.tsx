import React from 'react';
import styled from 'styled-components';

const DronesContainer = styled.div`
  padding: 80px 0;
  background: #f9f9f9;
  width: 100%;
`;

const DronesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
`;

const DronesTitle = styled.h2`
  font-size: 2.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 60px;
`;

const DronesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DroneCard = styled.div`
  position: relative;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-height: 300px;
  max-height: 400px;
`;

const DroneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 60px 20px 20px 20px;
  transition: transform 0.3s ease;

  ${DroneCard}:hover & {
    transform: scale(1.1);
  }
`;

const DroneName = styled.h3`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  font-size: 1.5rem;
  color: #4169e1;
  margin: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`;

const DroneInfo = styled.div<{ isHovered: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  transform: translateY(${props => props.isHovered ? '0' : '100%'});
  transition: transform 0.3s ease;
`;

const DroneDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
`;

const DroneSpecs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
`;

const SpecItem = styled.li`
  font-size: 0.9rem;
  color: #444;
  margin: 5px 0;
`;

const drones = [
  {
    name: 'DJI Mini 2',
    image: '/images/drones/mini2.jpg',
    description: 'Dron ultraligero perfecto para fotografía y videografía aérea básica.',
    specs: [
      'Peso: < 249g',
      'Tiempo de vuelo: 31 min',
      'Distancia máxima: 10km',
      'Resolución: 4K/30fps'
    ]
  },
  {
    name: 'DJI Mavic 3M Multispectral',
    image: '/images/drones/mavic3m.jpg',
    description: 'Sistema avanzado de mapeo multispectral para agricultura de precisión.',
    specs: [
      'Cámara multiespectral',
      'RTK integrado',
      'Tiempo de vuelo: 43 min',
      'Mapeo preciso'
    ]
  },
  {
    name: 'DJI Mavic 3E Thermal',
    image: '/images/drones/mavic3e.jpg',
    description: 'Cámara térmica integrada para inspecciones y análisis térmico.',
    specs: [
      'Cámara térmica',
      'Zoom 56×',
      'Tiempo de vuelo: 45 min',
      'Sensor 4/3 CMOS'
    ]
  },
  {
    name: 'Agras T40',
    image: '/images/drones/agrasT40.jpg',
    description: 'Dron de pulverización agrícola de alta capacidad para grandes extensiones.',
    specs: [
      'Capacidad: 40L',
      'Velocidad: 7m/s',
      'Ancho de pulverización: 9m',
      'Sistema RTK'
    ]
  }
];

const DroneCardComponent = ({ drone }: { drone: typeof drones[0] }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <DroneCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DroneName>{drone.name}</DroneName>
      <DroneImage src={drone.image} alt={drone.name} />
      <DroneInfo isHovered={isHovered}>
        <DroneDescription>{drone.description}</DroneDescription>
        <DroneSpecs>
          {drone.specs.map((spec, index) => (
            <SpecItem key={index}>{spec}</SpecItem>
          ))}
        </DroneSpecs>
      </DroneInfo>
    </DroneCard>
  );
};

const Drones = () => {
  return (
    <DronesContainer id="drones">
      <DronesWrapper>
        <DronesTitle>Nuestros Drones</DronesTitle>
        <DronesGrid>
          {drones.map((drone, index) => (
            <DroneCardComponent key={index} drone={drone} />
          ))}
        </DronesGrid>
      </DronesWrapper>
    </DronesContainer>
  );
};

export default Drones;
