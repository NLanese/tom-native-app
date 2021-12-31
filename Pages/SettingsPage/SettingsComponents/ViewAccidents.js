import React from "react"
import { useHistory } from 'react-router-native';
import { Text, ScrollView, View } from 'react-native'
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'
import { ViewAccidentsStyles } from "../../../Styles/SettingStyles";
import NavBar from "../../../Global/NavBar";

const ViewAccidents = () => {

    return (
        <View>
            <NavBar />

            <View style={ViewAccidentsStyles.container}>
                <ScrollView>

                </ScrollView>
            </View>
        </View>
    )
}

export default ViewAccidents
