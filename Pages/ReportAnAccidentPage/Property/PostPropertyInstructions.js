import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, ScrollView } from 'react-native'

import ContinueButton from "../../../Global/Buttons/ContinueButton"
import Banner from "../../../Global/Banner"

import Template from "../../../Styles/RAA/RAATemplateStyles"

const PostPropertyInstructions = () => {


    return(
        <View >
            <View style={{marginLeft: 0}}>
                <Banner />
            </View>
            <ScrollView contentContainerStyle={{height: 'auto', paddingBottom: 200}}>
                <Text style={{...Template.title, marginBottom: 20}}>
                    Thank you for filing the Property Damage.
                </Text>
                <Text style={{...Template.subTitle2, marginBottom: 20}}>
                    If you have already spoken to the individuals(s) whose package(s) or property has been damaged you can disregard the following instructions
                </Text>
                <Text style={{...Template.subTitle2, marginBottom: 20}}>
                    If you have not already contacted the individual(s) in question, please contact them if possible. This means if you have a phone number available, please text or call the individual. If not, leave a note for them. Do not simply leave the scene without leaving some form of note or communication.
                </Text>
                <Text style={{...Template.subTitle2, marginBottom: 20}}>
                    Addiitonally, if you have not already, please call the ARC at 856-333-6510 to report the damage
                </Text>
                <View style={{marginLeft: 30, marginTop: 70}}>
                    <ContinueButton nextPage={'check-injury-accident'} nextSite={'Check Injury'} buttonText={'Done'} pageName={'property-accident-extra-information-continue-button'} />
                </View>
            </ScrollView>
        </View>
        )

}

export default PostPropertyInstructions
    