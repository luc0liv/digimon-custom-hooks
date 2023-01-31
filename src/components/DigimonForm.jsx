import React from 'react';
import useFetch from '../hooks/useFetch';
import useValidInputs from '../hooks/useValidInputs';

function DigimonForm() {
  const digimonName = useValidInputs('');
  const { data, fetchData, loading } = useFetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName.inputValue}`);

  const fetchDigimon = () => {
    digimonName.validateField();
    fetchData();
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Nome do digimon"
          value={ digimonName.inputValue }
          onChange={ digimonName.handleChange }
          className="digi-input"
        />
        { digimonName.message && <p>{digimonName.message}</p>}
        <button type="button" onClick={ fetchDigimon } className="digi-button">
          Buscar
        </button>
      </form>
      <div>
        { !data.length
          ? 'Nenhum digimon encontrado!'
          : data.map((digi, index) => (
            <div key={ index }>
              <p className="digi-name">{digi.name}</p>
              <img src={ digi.img } alt={ digi.name } />
            </div>
          )) }
        { loading && <h2>Carregando...</h2>}
      </div>
    </div>
  );
}

export default DigimonForm;
