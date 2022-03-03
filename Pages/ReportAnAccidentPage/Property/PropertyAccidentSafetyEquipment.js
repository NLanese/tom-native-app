import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Input, CheckBox } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { propertyDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo"
import Template from "../../../Styles/RAA/RAATemplateStyles";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const dynamicStyles = StyleSheet.create({

})

const PropertyAccidentSafetyEquipment = () => {
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    let insideSafety = []
    let outsideSafety = ["Trolley / Hand Cart", ""]

    return (
        <View>
            <Banner />
            <Text style={Template.questionText}>
                Select all safety equipment that was used
            </Text>
            <View>
                {/* {propertyData.safety_equipment.safetyEquipment ? (<ContinueButton nextPage={'property-accident-extra-info'} buttonText={'Okay'} pageName={'property-accident-safety-equipment-continue-button'} />) : null} */}
            </View>
        </View>
    )
}

export default PropertyAccidentSafetyEquipment