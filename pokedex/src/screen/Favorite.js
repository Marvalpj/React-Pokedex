import React, {useState, useEffect, useCallback} from 'react'
import {SafeAreaView} from 'react-native'
import {useFocusEffect} from "@react-navigation/native"
import {GetPokemonFavoriteApi} from '../api/favorite'
import {getPokemonDetailsApi} from '../api/pokemon'
import PokemonList from '../components/PokemonList'

export default function Favorite(){
    const [pokemonsTeam, setPokemonsTeam] = useState()
    

    useFocusEffect(
        useCallback(() => {

            (async () => {
    
                const response = await GetPokemonFavoriteApi()
    
                const pokemonsArray = await Promise.all(
                    response.map( async (id) => {
                        const pokemonDetail = await getPokemonDetailsApi(id)
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
                setPokemonsTeam(pokemonsArray)
            })()
    
        }, [])
    )

    return(
        <SafeAreaView>
            <PokemonList pokemons={pokemonsTeam} rowPokemon={1} />
        </SafeAreaView>
    )
}
