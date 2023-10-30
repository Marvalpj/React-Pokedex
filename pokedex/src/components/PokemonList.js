import React from 'react'
import {FlatList,StyleSheet, ActivityIndicator } from 'react-native'
import PokemonCard from './PokemonCard'

export default function PokemonList(props){

    const {pokemons, loadPokemons, isNext} = props

    const loadMore = async () => {
        loadPokemons()
    }

    return (
        <FlatList
            data = {pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={ (pokemon) => String(pokemon.id)}
            renderItem={ ({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={style.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext &&(
                    <ActivityIndicator
                        size={'large'}
                        style= {style.spinner}
                        color="#AEAEAE"
                    />
                ) 
            }
        />
    )
}

const style = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60
    }
})