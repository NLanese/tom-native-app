import React from "react"
import { useHistory } from 'react-router-native';
import { Text, ScrollView } from 'react-native'
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'

const ViewAccidents = () => {

    return (
        <ScrollView >
            <Text>Accident Information</Text>
        </ScrollView>
    )
}

export default ViewAccidents
