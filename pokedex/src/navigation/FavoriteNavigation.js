import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import FavoriteScreen from "../screen/Favorite"
import PokemonScreen from "../screen/Pokemon"

const Stack = createStackNavigator()

export default function FavoriteNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorite"  component={FavoriteScreen} options={{
                title: "Equipo Pokemon"
            }} />

            <Stack.Screen name="Pokemon"  component={PokemonScreen} options={{
                title: "", headerTransparent: true
            }} />
        </Stack.Navigator>
    )
}