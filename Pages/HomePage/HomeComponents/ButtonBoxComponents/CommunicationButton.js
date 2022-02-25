import React from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'

import { useRecoilState } from "recoil";
import { websiteState } from "../../../../Recoil/atoms";

import { useNavigation } from "@react-navigation/native";

import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const CommunicationButton = () => {
   
    let maxWidth = Dimensions.get('window').width
    let maxHeight = Dimensions.get('window').height

    const navigation = useNavigation()

    const [website, setWebsite] = useRecoilState(websiteState)

    const handleClick = () => {
        setWebsite({current: "Messaging", previous: website.current})
        navigation.navigate("messages")
    }


    return (
        <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {handleClick()}}>
            <View style={ButtonBoxStyles.buttonCard}>
                <Image 
                    style={ButtonBoxStyles.image}
                    source={require('../../../../assets/Communication.jpeg')}/>
            </View> 
            <View style={{ marginTop: '-30%' }}>
                <Text style={ButtonBoxStyles.label}>COMMUNICATION</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default CommunicationButton
