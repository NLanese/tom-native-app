import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

const CheckCollisionAccident = () => {
    

    return (
        <View>
            <Banner />
            <Text>Was another vehicle hit?</Text>

            <ContinueButton nextPage={'create-collision-accident'} buttonText={'Yes'} pageName={'check-collision-accident-yes-button'} />
            <ContinueButton nextPage={'check-property-accident'} buttonText={'No'} pageName={'check-collision-accident-no-button'} />
        </View>
    )
}

export default CheckCollisionAccident