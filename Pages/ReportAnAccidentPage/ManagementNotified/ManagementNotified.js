import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import Banner from "../../../Global/Banner"
import NoButton from "./Components/NoButton"
import ContinueButton from "../../../Global/Buttons/ContinueButton"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const ManagementNotified = () => {

    return (
        <View>
            <Banner />

            <Text>Have you contacted management?</Text>
            <NoButton />
            <ContinueButton nextPage={"police_notified"} pageName={"management-notified-yes-button"} buttonText={"Yes"} />
        </View>
    )
}

export default ManagementNotified