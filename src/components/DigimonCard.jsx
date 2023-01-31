import React from 'react';
import PropTypes from 'prop-types';

function DigimonCard({ name, image }) {
  return (
    <div className="digimon-card">
      <p>{name}</p>
      <img src={ image } alt={ name } />
    </div>
  );
}

export default DigimonCard;

DigimonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
