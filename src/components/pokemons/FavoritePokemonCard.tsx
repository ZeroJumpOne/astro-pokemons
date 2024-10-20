import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, type Component, Show } from "solid-js";

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (props) => {

    // Si se destructura deja de ser reactivo
    const { pokemon } = props;
    const [isVisible, setVisible] = createSignal(true);

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        // console.log('quiero eliminar!!!');
        const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];

        const newFavorites = favorites.filter((item) => item.id !== pokemon.id);

        // Se tiene que almacenar como cadena
        localStorage.setItem('favorites', JSON.stringify(newFavorites));

        setVisible(false);
    }

    return (

        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">

                <a href={`/pokemons/${pokemon.name}`}>

                    <img src={imageSrc} alt={pokemon.name} width="96" height="96" style={`view-transition-name: ${pokemon.name}-image`} />

                    <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
                </a>

                <button class="text-red-400" onClick={deleteFavorite}>Borrar</button>

            </div>
        </Show>

    )

}