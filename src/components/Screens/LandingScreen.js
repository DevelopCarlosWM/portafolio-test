import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOriginalPokemons } from '../../api/pokeApi';
import { pokemonListSelector } from '../../redux/selectors/pokemon.selectors';
import { pokemonActions } from '../../redux/slices/pokemon.slice';
import AboutMeSection from '../AboutMe';
import ScreenContainer from '../ScreenContainer';
import SkillsetSection from '../SkillsetSection';

const LandingScreen = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons } = useSelector(pokemonListSelector);

  useEffect(() => {
    dispatch(pokemonActions.setIsLoading(true));
    const getPokemons = async () => {
      const pokeResponse = await getAllOriginalPokemons();
      dispatch(pokemonActions.fillPokemonsList(pokeResponse))
    };
    getPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log({
      pokemons
    });
  }, [pokemons]);

  return (
    <React.Fragment>
      <ScreenContainer>
        <AboutMeSection
          title="Mauricio Sandre"
          content="dsjfa asjdajda dhs dh2j3ms dahufr s ajdw dfnasdjf ajf asds dfhq ana da"
          buttonTitle="Contact"
          img={require('../assets/logo.png')}
        />
        <SkillsetSection />
        <AboutMeSection
          titleColor="#000"
          contentColor="#717171"
          backgroundColor="#fff"
          title="Projects"
          content="dsjfa asjdajda dhs dh2j3ms dahufr s ajdw dfnasdjf ajf asds dfhq ana da"
          buttonTitle="Go to projects"
          img={require('../assets/logo-dark.png')}
        />
      </ScreenContainer>
    </React.Fragment>
  );
};

export default LandingScreen;
