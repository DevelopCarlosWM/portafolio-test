import { createSlice } from '@reduxjs/toolkit';

export const getPokemonsInitialState = () => ({
  pokemons: [],
  isLoading: false,
});

export const {
  name: pokemonName,
  actions: pokemonActions,
  reducer: pokemonReducer,
} = createSlice({
  initialState: getPokemonsInitialState(),
  name: 'PokemonsState',
  reducers: {
    setIsLoading(state, { payload }) {
      state.isLoading =  payload;
    },
    fillPokemonsList(state, { payload }) {
      state.pokemons = payload;
      state.isLoading = false;
    },
  },
})
