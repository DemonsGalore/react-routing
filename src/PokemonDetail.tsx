import React, { useEffect, useState } from 'react';

import './PokemonDetail.css';

export type ColorType = {
    name: string,
    url: string
};

export type PokemonDetail = {
    color: ColorType,
    name: string,
    id: number
};

// TODO: match type
const PokemonDetail = ({ match }: { match: any }) => {
    const [item, setItem] = useState({} as PokemonDetail);

    const style = {
        color: item.color ? item.color.name : 'black',
      };

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${match.params.name}/`);
        const item = await data.json() as PokemonDetail;
        setItem(item);
    };

    return (
        <main className="pokemon-detail">
            <h1 style={style}>{item.name ? `${item.name} - ${item.id}` : ''}</h1>
            {item.id ? (
                <img src={item.id ? `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png` : ''} alt={match.params.name} />
            ) : ''}
        </main>
    );
}

export default PokemonDetail;
