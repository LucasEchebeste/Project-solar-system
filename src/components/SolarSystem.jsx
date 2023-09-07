import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className='solar-system'>
        <Title headline="Planetas" />
        <div className='plan'>
          {Planets.map(({ name, image }, index) => (
            <PlanetCard
              key={ index }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
