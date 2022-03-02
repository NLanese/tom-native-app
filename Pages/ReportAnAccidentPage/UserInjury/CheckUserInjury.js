import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

const CheckUserInjury = () => {
    return (
        <View>
            <Banner />
            <Text>Are you injured?</Text>

            <ContinueButton nextPage={'create-injury-report'} buttonText={'Yes'} pageName={'check-user-injury-yes-button'} />
            <ContinueButton nextPage={'check-other-injuries'} buttonText={'No'} pageName={'check-user-injury-no-button'} />
        </View>
    )
}

export default CheckUserInjury