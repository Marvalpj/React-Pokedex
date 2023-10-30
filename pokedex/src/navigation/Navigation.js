import React from 'react'
import { Image } from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
// Stack Navigations
import PokedexNavigation from './PokedexNavigation'
import FavoriteNavigation from './FavoriteNavigation'
import AccountNavigation from './AccountNvigation'

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favoritos" component={FavoriteNavigation} options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({color, size}) => <Icon name="heart" color={color} size={size} />
            }} />
            <Tab.Screen name="Pokedex" component={PokedexNavigation}  options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball()
            }} />
            <Tab.Screen name="Account" component={AccountNavigation} options={{
                tabBarLabel: "Cuenta",
                tabBarIcon: ({color,size}) => <Icon  name="user" color={color} size={size} />
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
