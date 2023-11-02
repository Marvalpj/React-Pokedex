import React,{useState, useEffect} from "react"
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

import Information from "./Information"
import Stats from "./Stats"

export default function PokemonInfoTab(props){
    const infoTab = "INFO"
    const statsTab = "TAB"
    const {pokemon} = props
    
    const [activeTab, setActiveTab] = useState(infoTab)

    const renderContext = () => {
    
        if (activeTab === infoTab) {
          return <Information height={pokemon.height} weight={pokemon.weight} abilities={pokemon.abilities} />
        } else if (activeTab === statsTab) {
          return <Stats stats={pokemon.stats} />;
        } 
    
        return null;
      };
    
    return (
        <View>
            <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => setActiveTab(infoTab )}>
                    <Text styles={[styles.tabText, activeTab === infoTab && styles.activeTab]}  >Informacion</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab(statsTab)}>
                    <Text styles={[styles.tabText, activeTab === statsTab && styles.activeTab]} >Base Stats</Text>
                </TouchableOpacity>
            </View>
            <View>{renderContext()}</View>
      </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
      },
      tabText: {
        fontSize: 20,
        fontWeight: "bold", 
      },
      activeTab: {
        color: 'blue', 
      },
})