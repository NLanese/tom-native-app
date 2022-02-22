import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { Input } from '@ui-kitten/components';
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CreateAccident = () => {
    const [accidentData, setAccidentData] = useState()

    return (
        <View>
            <Banner />
            <Text> CREATE AN ACCIDENT </Text>
        </View>
    )
}

export default CreateAccident