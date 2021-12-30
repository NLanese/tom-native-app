import React from "react";
import { View, Text, Button } from 'react-native'
import { userState } from "../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { BeforeWeBeginStyle } from "../../Styles/ReportAnAccidentStyles";
import ThatsMeButton from "./BeforeWeBeginComponents/ThatsMeButton";
import ThatsNotMeButton from "./BeforeWeBeginComponents/ThatsNotMeButton";
import NavBar from "../../Global/NavBar";

const BeforeWeBegin = () => {
    const [userData, setUserData] = useRecoilState(userState)

    return (
        <View>
            <NavBar />
            
            <View style={BeforeWeBeginStyle.container}>
                <Text style={BeforeWeBeginStyle.text}> Before we begin, Please verify that I have the correct information below.</Text>

                <View style={BeforeWeBeginStyle.subContainer}>
                    <Text style={BeforeWeBeginStyle.text}>Your name is: {userData.firstname} {userData.lastname} </Text>
                    <Text style={BeforeWeBeginStyle.text}>Your Employee Id is: {userData.employeeId} </Text>
                </View>

                <ThatsMeButton />
                <ThatsNotMeButton />
            </View>

        </View>
    )
}

export default BeforeWeBegin