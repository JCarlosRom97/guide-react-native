import { create } from "zustand";
import { pokemonListType } from "../types";
type pokemonState = {
    pokemons:pokemonListType[]
    loading: boolean,
    error: boolean,
    fetchPokemons: () => Promise<void>
}
export const usePokemonStore = create<pokemonState>((set, get)=>({
    pokemons:[],
    loading: false,
    error: false,
    fetchPokemons: async()=>{
        try {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const jsonData = await data.json();
           
            set({pokemons: jsonData.results})
            
        } catch (error) {   
            
        }
    }
}))