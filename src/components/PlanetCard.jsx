import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div>
        <p className='planetName'>{planetName}</p>
        <img width={'200px'} src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>

    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
