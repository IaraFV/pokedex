import axios from "axios";
import { PokemonsDetails } from "../types/pokemonDetail";
import { getPokemonsDetails } from "./getPokemonsDetails";

 export interface PokemonListInterface {
    name: string;
    url: string;
}

interface ListPokemonsInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results:PokemonsDetails[]
}
export async function listPokemons(): Promise<ListPokemonsInterface> {
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;

    const response = await axios.get<ListPokemonsInterface>(endpoint);

    const promiseArr = response.data.results.map(({name}) => getPokemonsDetails(name));

    const resultsPromise = await Promise.all(promiseArr);

    return {
        ...response.data,
        results: resultsPromise
    };
}