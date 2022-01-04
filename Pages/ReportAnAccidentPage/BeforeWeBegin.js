import React from "react";
import { View, Text, Button } from 'react-native'
import { userState } from "../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { BeforeWeBeginStyles } from "../../Styles/ReportAnAccidentStyles";
import ThatsMeButton from "./BeforeWeBeginComponents/ThatsMeButton";
import ThatsNotMeButton from "./BeforeWeBeginComponents/ThatsNotMeButton";

const BeforeWeBegin = () => {
    const [userData, setUserData] = useRecoilState(userState)

    return (
        <View>            
            <View style={BeforeWeBeginStyles.container}>
                <Text style={BeforeWeBeginStyles.text}> Before we begin, Please verify that I have the correct information below.</Text>

                <View style={BeforeWeBeginStyles.subContainer}>
                    <Text style={BeforeWeBeginStyles.text}>Your name is: {userData.firstname} {userData.lastname} </Text>
                    <Text style={BeforeWeBeginStyles.text}>Your Employee Id is: {userData.employeeId} </Text>
                </View>

                <ThatsMeButton />
                <ThatsNotMeButton />
            </View>

        </View>
    )
}

export default BeforeWeBegin