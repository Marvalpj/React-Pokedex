import AsyncStorage  from "@react-native-async-storage/async-storage"
import {includes,pull} from "lodash"
import {FAVORITE_STORAGE} from "../utils/constants"


export async function GetPokemonFavoriteApi(){
    try {
        
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        return response ? JSON.parse(response) : []

    } catch (error) {
        throw error
    }
}
export async function AddPokemonFavoriteApi(id){
    try {
        
        const favorites = await GetPokemonFavoriteApi()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))

    } catch (error) {
        throw error
    }
}

export async function IsPokemonFavorite(id){
    try {
        
        const favorites = await GetPokemonFavoriteApi()
        return includes(favorites,id)

    } catch (error) {
        throw error
    }
}

export async function RemovePokemonFavoriteApi(id){
    try {
        
        const favorites = await GetPokemonFavoriteApi()
        const newArray = pull(favorites,id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newArray))
    } catch (error) {
        throw error
    }
}

