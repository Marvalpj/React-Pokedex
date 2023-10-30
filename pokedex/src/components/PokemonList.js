import React from 'react'
import { View,Text, FlatList,StyleSheet } from 'react-native'
import PokemonCard from './PokemonCard'

export default function PokemonList(props){

    const {pokemons} = props

    return (
        <FlatList
            data = {pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={ (pokemon) => String(pokemon.id)}
            renderItem={ ({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={style.flatListContentContainer}
        />
    )
}

const style = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})