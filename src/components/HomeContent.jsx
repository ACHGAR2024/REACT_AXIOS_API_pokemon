// src/components/HomeContent.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const typeColors = {
  normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F8D030', grass: '#78C850',
  ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0', ground: '#E0C068', flying: '#A890F0',
  psychic: '#F85888', bug: '#A8B820', rock: '#B8A038', ghost: '#705898', dragon: '#7038F8',
  dark: '#705848', steel: '#B8B8D0', fairy: '#EE99AC'
};

const HomeContent = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=217');
      const detailedPokemons = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const detailResponse = await axios.get(pokemon.url);
          return detailResponse.data;
        })
      );
      setPokemons(detailedPokemons);
    }
    
    fetchPokemon();
  }, []);

  return (
    <div className="container mx-auto p-4 t-72">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.other['official-artwork'].front_default}
            types={pokemon.types}
            typeColors={typeColors}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
