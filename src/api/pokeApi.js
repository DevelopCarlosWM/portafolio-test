export const getAllOriginalPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  try {
    const request = await fetch(url);
    const { results } = await request.json();
    return results;
  } catch (error) {
    console.error(error);
  }
};
