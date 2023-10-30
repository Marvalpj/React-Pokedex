import React, {useState, useEffect} from 'react'
import {SafeAreaView,Text} from 'react-native'

import {getPokemonsApi, getPokemonDetailsByUrlApi} from '../api/pokemon'

import PokemonList from '../components/PokemonList'

export default function Pokedex(){

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        (async () =>{
            await loadPokemons()
        })()
    }, [])

    const loadPokemons = async () => {
        try 
        {
            const response = await getPokemonsApi()
            
            const pokemonArray = await Promise.all(
                response.results.map( async (pokemon) =>{
                    const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url)

                    return {
                        id: pokemonDetail.id,
                        name : pokemonDetail.name,
                        type: pokemonDetail.types[0].type.name,
                        order: pokemonDetail.order,
                        //image: pokemonDetail.sprites.other.dream_world.front_default
                        image: pokemonDetail.sprites.front_default
                    }

                })
            )

            setPokemons([...pokemons, ...pokemonArray])
        } 
        catch (error) {
            console.error(error)    
        }
    }

    return(
        <SafeAreaView>
            <PokemonList pokemons= {pokemons} />
        </SafeAreaView>
    )
}
