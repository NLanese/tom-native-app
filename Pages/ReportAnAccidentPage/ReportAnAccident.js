import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native'
import { ReportAnAccidentStyle } from "../../Styles/ReportAnAccidentStyles";
import { useRecoilState } from 'recoil'
import { userState } from '../../Recoil/atoms'
import { useHistory } from "react-router-native";
import { useMutation } from "@apollo/client";
import { CREATEACCIDENT } from "../../GraphQL/operations";
import Title from "./ReportAnAccidentComponents/Title";
import InputField from "./ReportAnAccidentComponents/InputField";

const ReportAnAccident = () => {
    let history = useHistory()
    const [createAccident, { loading: loading, error: error, data: data }] =
		useMutation(CREATEACCIDENT);
    const [accidentData, setAccidentData] = useState({
        usingSafety: false,
        safetyFailed: false
    })
    const [returnedAccidentData, setReturnedAccidentData] = useState({})

    const handleInput = (id, information, event) => {
        const input = { ...accidentData }
        input[id] = information
        setAccidentData(input)
    }

    useEffect( async () => {
        if (!loading && data) {
            await setReturnedAccidentData(data.createAccident)
            // await history.push("/reporthitperson")
        } else {
            console.log(error)
        }
    }, [data])

    console.log(returnedAccidentData)

    return (
        <View style={ReportAnAccidentStyle.container}>
            <Title />
            <InputField accidentData={accidentData} handleInput={handleInput}/>
            <Button 
                onPress={() => {
                    createAccident({
                        variables: {
                            name: accidentData.name,
                            usingSafety: accidentData.usingSafety,
                            safetyFailed: accidentData.safetyFailed,
                            numberPackageCarried: parseInt(accidentData.numberPackageCarried),
                            safetyEquipmentUsed: accidentData.safetyEquipmentUsed
                        }
                    })
                }}
                title='Submit!'
                color='#CCCCCC'
				accessibilityLabel='Submit!'
            />
        </View>
    )
}

export default ReportAnAccident