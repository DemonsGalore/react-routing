import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export type PokeResponse = {
    pokemon_species: PokemonSpecies[]
};

export type PokemonSpecies = {
    name: string,
    url: string
};

const Pokemon = () => {
    const [items, setItems] = useState([] as PokemonSpecies[]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/generation/1');
        const items = await data.json() as PokeResponse;
        setItems(items.pokemon_species);
    };

    return (
        <main>
            <h1>Pokemon</h1>
            <ul>
                {items.map((pokemon) => (
                    <li key={pokemon.name}>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Pokemon;
