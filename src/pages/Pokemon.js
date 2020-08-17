import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pokemon() {

    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();
        const pokemons = data.results.map((pokemon, index) => ({
            id: index + 1,
            name: pokemon.name,
            url: pokemon.url,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +1}.png`
        }));
        setPokemons(pokemons);
    };

    useEffect(() => {
        fetchPokemons();
        return function cleanup() {
            setPokemons([]);
        };
    },[]);

    return (
        <div className="pokemon">
            <div className="pokemon_cards">
                { pokemons.map(pokemon => (
                    <div className="pokemon_card" key={ pokemon.id }>
                        <Link className="plain_link" 
                            to={
                                { 
                                    pathname: `/pokemons/${ pokemon.name }`,
                                    url: pokemon.url
                                }
                            }>
                            <div className="pokemon_card_content">
                                <img src={ pokemon.sprite } alt={ pokemon.name } />
                                <span>{ pokemon.name }</span>
                            </div>
                        </Link>
                    </div> 
                )) }
            </div>
        </div>
    );
}

export default Pokemon;