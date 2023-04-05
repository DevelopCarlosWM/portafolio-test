import { createSelector } from '@reduxjs/toolkit';
import { pokemonName } from '../slices/pokemon.slice';

export const pokemonRootSelector = state => state[pokemonName];

export const pokemonListSelector = createSelector(pokemonRootSelector, ({ isLoading, pokemons }) => ({
  isLoading,
  pokemons,
}));
