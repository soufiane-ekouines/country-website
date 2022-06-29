import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [RongeValue, setRongeValue] = useState(36);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [RadioSelect, setRadioSelect] = useState("");
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);
    return (
        <div className='countries'>
            <ul className='radio-container'>
                <input type="range" min="1" max="250" defaultValue={RongeValue} onChange={(e) => setRongeValue(e.target.value)} />
                {
                    radios.map((chois) => (
                        <li>
                            <input type="radio" id={chois} name="chois" checked={chois === RadioSelect} onChange={(e) => setRadioSelect(e.target.id)} />
                            <label htmlFor={chois}>{chois}</label>
                        </li>
                    ))
                }
            </ul>
            {RadioSelect && <button onClick={() => setRadioSelect("")}>Annuler la recherche</button>}
            <ul className='fathercart'>
                {
                    data
                        .filter((country) => country.continents[0].includes(RadioSelect))
                        .sort((a, b) => b.population - a.population)
                        .slice(0, RongeValue)
                        .map((country, index) => (
                            <Card key={index} country={country} />
                        ))
                }
            </ul>
        </div>
    );
};

export default Countries;