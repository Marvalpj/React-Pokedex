import React from "react"
import {StyleSheet, View, Text} from 'react-native'
import {map,capitalize} from "lodash"
export default function Information(props){
    
    const {height,weight,abilities} = props
  
    return (
        <View style={styles.contents}>
            <View style={styles.block}>
                <View style={styles.blockTittle}>
                    <Text style={styles.infoName}>{capitalize("Altura")}</Text>
                </View>
                <View style={styles.blockInfo}>
                    <Text style={styles.info}>{capitalize(height)}</Text>
                </View>
            </View>
            <View style={styles.block}>
                <View style={styles.blockTittle}>
                    <Text style={styles.infoName}>{capitalize("Peso")}</Text>
                </View>
                <View style={styles.blockInfo}>
                    <Text style={styles.info}>{capitalize(weight)}</Text>
                </View>
            </View>
            <View style={styles.block}>
                <View style={styles.blockTittle}>
                    <Text style={styles.infoName}>{capitalize("Habilidades")}</Text>
                </View>
                
                <View style={styles.blockInfo}>
                    {
                        map(abilities, (item,index) => (
                            <View key={index}>
                                <Text style={styles.info}>{capitalize(item.ability.name)}</Text>
                            </View>
                        
                        ))
                    }
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    contents: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80,
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5
    },
    blockTittle: {
        width: "40%"
    },
    infoName: {
        fontSize: 12,
        color: "#6b6b6b"
    },
    blockInfo: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center"
    },
    info: {
        width: "100%",
        fontSize: 12,
        alignItems: "center"
    },
    contentsAbilities:{
        width: "70%",
        alignItems: "center"
    }
})