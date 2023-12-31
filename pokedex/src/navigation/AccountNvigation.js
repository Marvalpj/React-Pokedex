import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import AccountScreen from "../screen/Account"

const Stack = createStackNavigator()

export default function AccountNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorite"  component={AccountScreen} options={{
                title: "Cuenta"
            }} />
        </Stack.Navigator>
    )
}