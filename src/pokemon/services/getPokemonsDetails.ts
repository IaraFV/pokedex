import axios from "axios";
import { PokemonsDetails } from "../types/pokemonDetail";

export async function getPokemonsDetails(name: string): Promise<PokemonsDetails> {
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`;

    const response = await axios.get<PokemonsDetails>(endpoint);

    return response.data;
}