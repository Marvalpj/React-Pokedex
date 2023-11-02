import React, {useState, useEffect, useCallback} from 'react'
import {SafeAreaView, Button} from 'react-native'
import {useFocusEffect} from "@react-navigation/native"
import {GetPokemonFavoriteApi} from '../api/favorite'
import {getPokemonDetailsApi} from '../api/pokemon'
import PokemonList from '../components/PokemonList'
import {RemovePokemonsFavoriteApi} from '../api/favorite'
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
    
        }, [pokemonsTeam])
    )
    
    const removeTeam = async () => {
        try {
            await RemovePokemonsFavoriteApi();
            setPokemonsTeam([])
        } catch (error) {
            
        }
    } 

    return(
        <SafeAreaView>
            <Button
                title="Remover todos los pokemones"
                onPress={() => removeTeam()}
            />
            <PokemonList pokemons={pokemonsTeam} />
        </SafeAreaView>
    )
}
