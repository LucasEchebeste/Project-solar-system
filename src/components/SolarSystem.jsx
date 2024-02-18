import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Planetas" />
        <div className='planetCard'>
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
