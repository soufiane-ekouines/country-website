import React from 'react';

const Card = ({ country }) => {
    return (
        <div>
            <li className='card'>
                <img src={country.flags.svg} alt={'flags' + country.translations.fra.common} />
                <div className='infos'>
                    <h2>{country.translations.fra.common}</h2>
                    <h3>{country.capital}</h3>
                    <p>{country.population.toLocaleString()}</p>
                </div>
            </li>
        </div>
    );
};

export default Card;