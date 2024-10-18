type Pokemon = {
  number: string;
  name: string;
};

type Prop = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Prop) {
  const listPokemon = pokedex.map((pokedex) => (
    <li key={pokedex.number}>{pokedex.name}</li>
  ));
  return <ul>{listPokemon}</ul>;
}
