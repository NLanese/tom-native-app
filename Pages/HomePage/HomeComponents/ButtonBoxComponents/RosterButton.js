import React from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'

import { useRecoilState } from "recoil";
import { websiteState } from "../../../../Recoil/atoms";

import { useNavigation } from "@react-navigation/native";

import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const RosterButton = () => {
    
    let maxWidth = Dimensions.get('window').width
    let maxHeight = Dimensions.get('window').height

    const navigation = useNavigation()

    const [website, setWebsite] = useRecoilState(websiteState)

    const handleClick = () => {
        setWebsite({current: "Roster", previous: website.current})
        navigation.navigate("roster")
    }


    return (
        <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {handleClick()}}>
        <View style={ButtonBoxStyles.buttonCard}>
                <Image 
                    style={{
                        alignContent: 'center',
                        top: '30%',
                        height: 60,
                        width: 60,
                        marginLeft: 42.5
                    }}
                    source={require('../../../../assets/roster-icon.jpeg')}/>
            </View> 
            <View style={{ marginTop: '-30%' }}>
                <Text style={ButtonBoxStyles.label}>ROSTER</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default RosterButton
