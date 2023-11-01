import React, {useEffect, useState} from 'react'
import {Alert} from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome5'
import {AddPokemonFavoriteApi, IsPokemonFavorite, RemovePokemonFavoriteApi,GetPokemonFavoriteApi} from '../../api/favorite'


export default function Favorite(props){
    const { id } = props
    const [isFavorite, setIsFavorite] = useState(undefined)
    const [reloadCheck,setReloadCheck] = useState(false)
    
    useEffect(()=>{
        (async () => {
            try 
            {
                const response = await IsPokemonFavorite(id)
                setIsFavorite(response)    
            } catch (error) {
                setIsFavorite(false)
            }
        })()
    },[id,reloadCheck])
    
    const onReloadCheckFavorite = () => {
        setReloadCheck((prev) => !prev)
    }

    const addFavorite = async () => {
        try {
            const response = await GetPokemonFavoriteApi()
            if(response?.length < 6 ){
                await AddPokemonFavoriteApi(id)
                onReloadCheckFavorite()
            }else {
                Alert.alert('Equipo Completo', 'El equipo pokemon tiene un tamanio maximo de 6', [
                    {text: 'OK'},
                  ]);
            }
            
        } catch (error) {
            
        }
    }

    const removeFavorite = async () => {
        try {
            await RemovePokemonFavoriteApi(id)
            onReloadCheckFavorite()
        } catch (error) {
            
        }
    }

    return (
        <Icon 
            name="heart" 
            color="#fff" 
            size={20} 
            solid={isFavorite}
            onPress={ isFavorite ? removeFavorite : addFavorite} 
            style={
                {
                    marginRight:20,
                }
            }
            />  
    )
}