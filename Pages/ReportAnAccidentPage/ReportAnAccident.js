import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native'
import { ReportAnAccidentStyle } from "../../Styles/ReportAnAccidentStyles";
import { useRecoilState } from 'recoil'
import { userState } from '../../Recoil/atoms'
import { useMutation } from "@apollo/client";
import { CREATEACCIDENT } from "../../GraphQL/operations";
import Title from "./ReportAnAccidentComponents/Title";
import InputField from "./ReportAnAccidentComponents/InputField";

const ReportAnAccident = () => {
    const [user, setUser] = useRecoilState(userState)
    const [createAccident, { loading: loading, error: error, data: data }] =
		useMutation(CREATEACCIDENT);
    const [accidentData, setAccidentData] = useState({
        usingSafety: false,
        safetyFailed: false
    })

    const handleInput = (id, information, event) => {
        const input = { ...accidentData }
        input[id] = information
        setAccidentData(input)
    }

    useEffect(() => {
        if (!loading && data) {
            console.log(data)
        }
    }, [data])

    console.log(`data from outside ${data}`)
    // console.log(error)
    // console.log(accidentData)

    return (
        <View style={ReportAnAccidentStyle.container}>
            <Title />
            <InputField accidentData={accidentData} handleInput={handleInput}/>
            <Button 
                onPress={() => {
                    createAccident({
                        variables: {
                            name: accidentData.name,
                            usingSafety: true,
                            safetyFailed: true,
                            numberPackageCarried: 123,
                            safetyEquipmentUsed: {
                                "Key": "Value"
                            }
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