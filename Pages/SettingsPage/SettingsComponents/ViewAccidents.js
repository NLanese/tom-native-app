import React from "react"
import { Text, ScrollView, View } from 'react-native'
import { ViewAccidentsStyles } from "../../../Styles/SettingStyles";
import Banner from "../../../Global/Banner";

const ViewAccidents = () => {

    return (
        <View>
            <Banner />

            <View style={ViewAccidentsStyles.container}>
                <ScrollView>

                </ScrollView>
            </View>
        </View>
    )
}

export default ViewAccidents
