import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { propertyDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const PropertySpecificPictures = () => {
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    useEffect(() => {
        setPropertyData({
            ...propertyData,
            specific_pictures: {
                'Pic One': "Test url"
            }
        })
    }, [])

    return (
        <View>
            <Banner />
            <Text>TEST FROM PROPERTY SPECIFIC PICTURE</Text>

            <View>
                <ContinueButton nextPage={'property-accident-information'} nextSite={"Property Damage Information"} buttonText={'Done'} pageName={'property-specific-pictures-continue-button'}/>
            </View>
        </View>
    )
}

export default PropertySpecificPictures