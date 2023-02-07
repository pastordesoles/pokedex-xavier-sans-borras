import PokemonList from "../../components/PokemonList/PokemonList";

const FavouritesPage = (): JSX.Element => {
  return <PokemonList isFavourite={true} />;
};

export default FavouritesPage;
