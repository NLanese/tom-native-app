import React from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'

import { useRecoilState } from "recoil";
import { websiteState } from "../../../../Recoil/atoms";

import { useNavigation } from "@react-navigation/native";

import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"



const ReportAnAccidentButton = () => {

    let maxWidth = Dimensions.get('window').width
    let maxHeight = Dimensions.get('window').height

    const navigation = useNavigation()

    const [website, setWebsite] = useRecoilState(websiteState)

    const handleClick = () => {
        setWebsite({current: "Report Accident", previous: website.current})
        navigation.navigate("raa_landing")
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
                        marginLeft: 58
                    }}
                    source={require('../../../../assets/reporting-icon.png')}/>
            </View> 
            <View style={{ marginTop: '-33%', alignItems: 'center'}}>
                <Text style={ButtonBoxStyles.label}>REPORT AN ACCIDENT</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ReportAnAccidentButton