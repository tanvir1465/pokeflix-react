import React, { useState, useEffect } from 'react';

function PokemonDetail(params) {

    const [pokemon, setPokemon] = useState({});

    const fetchPokemonDetail = async () => {
        const response = await fetch(params.location.url);
        const pokemon = await response.json();
        setPokemon(pokemon);
    };

    useEffect(() => {
        fetchPokemonDetail();
        return function cleanup() {
            setPokemon({});
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="pokemon_detail">
            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` } alt={ pokemon.name } />
        </div>
    );
}

export default PokemonDetail;