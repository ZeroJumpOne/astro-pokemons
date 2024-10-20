import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = () : FavoritePokemon[] => {

    // Lo que se almacena en el localstorage es una cadena se debe transformar
    const favoritePokemons = JSON.parse( localStorage.getItem('favorites') ?? '[]' );

    return favoritePokemons;
}

export const FavoritePokemons = () => {

    const [ pokemons, setPokemons ] = createSignal( getLocalStoragePokemons() );

    return (
        <div class="grid sm:grid-cols-4 grid-cols-2">
            <For each={ pokemons() }>
                {
                    (pokemon) => <FavoritePokemonCard pokemon={pokemon}></FavoritePokemonCard>
                }
            </For>

        </div>
    )

}