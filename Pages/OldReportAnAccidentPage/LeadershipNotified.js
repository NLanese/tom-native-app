import React from "react";
import { View, Text } from 'react-native'
import { LeadershipNotifiedStyles } from "../../Styles/ReportAnAccidentStyles";
import NoButton from "./LeadershipNotifiedComponents/NoButton";
import YesButton from "./LeadershipNotifiedComponents/YesButton";
import Banner from "../../Global/Banner";

const LeadershipNotified = () => {


    return (
        <View>  
            <Banner />          
            <View style={LeadershipNotifiedStyles.container}>

                <Text style={LeadershipNotifiedStyles.text}>
                    Before we start, have you notified your leadership?
                </Text>
                <YesButton />
                <NoButton />
            </View>
        </View>
    )
}

export default LeadershipNotified