import React from "react";
import { View, Text } from 'react-native'
import { LeadershipNotifiedStyle } from "../../Styles/ReportAnAccidentStyles";
import NoButton from "./LeadershipNotifiedComponents/NoButton";
import YesButton from "./LeadershipNotifiedComponents/YesButton";
import NavBar from "../../Global/NavBar";

const LeadershipNotified = () => {


    return (
        <View>
            <NavBar />
            
            <View style={LeadershipNotifiedStyle.container}>

                <Text style={LeadershipNotifiedStyle.text}>
                    Before we start, have you notified your leadership?
                </Text>

                <YesButton />
                <NoButton />
            </View>
        </View>
    )
}

export default LeadershipNotified