import { combineReducers } from '@reduxjs/toolkit';
import { pokemonName, pokemonReducer } from '../slices/pokemon.slice';
export const reducersMapObject = {
  [pokemonName]: pokemonReducer,
};

export default combineReducers(reducersMapObject);
