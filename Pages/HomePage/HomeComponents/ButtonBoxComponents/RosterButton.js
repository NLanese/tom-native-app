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
        setWebsite({current: "Roster", previous: website.current, saved: website.saved})
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
                        height: 40,
                        width: 39,
                        marginLeft: 54
                    }}
                    source={require('../../../../assets/roster-icon.jpeg')}/>
            </View> 
            <View style={{ marginTop: '-33%', alignItems: 'center'}}>
                <Text style={ButtonBoxStyles.label}>ROSTER</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default RosterButton
