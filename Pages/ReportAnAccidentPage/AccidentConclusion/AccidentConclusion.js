import React, { useState } from 'react'
import { ScrollView, View, Text, Dimensions } from 'react-native'

import Banner from '../../../Global/Banner'
import ContinueButton from '../../../Global/Buttons/ContinueButton'

import Template from '../../../Styles/RAA/RAATemplateStyles'



let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height


const AccidentConclusion = () => {
    
    return(
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: '120%'}}>
                <Text style={Template.title}>
                    You're almost done! Just a few more steps!
                </Text>
                <Text style={{...Template.subTitle2, marginTop: 20, width: maxWidth - 60}}>
                    Next we are going to ask you about what happened leading up to the incident. Please remember to be as honest and accurate as you can with your answers
                </Text>
                <Text style={{...Template.subTitle2, marginTop: 20, width: maxWidth - 60}}>
                    These questions are designed to make the accident report as accurate and detailed as possible, so please do not leave anything out as if you do, you may need to clarify more information later on. 
                </Text>
                
                <View style={{marginLeft: 30, marginTop: 40}}>
                    <ContinueButton buttonText={"Okay"} nextPage={'accident-conclusion-questions'} />
                </View>

            </ScrollView>
        </View>
    )
}

export default AccidentConclusion