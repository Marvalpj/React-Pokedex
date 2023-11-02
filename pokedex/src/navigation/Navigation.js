import React from 'react'
import { Image } from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
// Stack Navigations
import PokedexNavigation from './PokedexNavigation'
import FavoriteNavigation from './FavoriteNavigation'

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Pokedex" component={PokedexNavigation}  options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball()
            }} />
            <Tab.Screen name="Favoritos" component={FavoriteNavigation} options={{
                tabBarLabel: "Equipo",
                tabBarIcon: () => renderTeamPokemon() 
            }} />
           
        </Tab.Navigator>
    )
}

function renderPokeball(){
    return (
        <Image
            source={require("../assets/pokeball.png")}
            style={{
                width: 75,
                height: 75,
                top: -15
            }}
        />
    ) 
}

function renderTeamPokemon(){
    return (
        <Image
            source={require("../assets/teampokemon.png")}
            style={{
                width: 100,
                height: 100,
                top: -15
            }}
        />
    ) 
}

