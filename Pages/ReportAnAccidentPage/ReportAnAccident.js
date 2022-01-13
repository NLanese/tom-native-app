import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native'
import { ReportAnAccidentStyles } from "../../Styles/ReportAnAccidentStyles";
import { useRecoilState } from 'recoil'
import { userState } from '../../Recoil/atoms'
import { useHistory } from "react-router-native";
import { useMutation, useQuery } from "@apollo/client";
import { CREATEACCIDENT, GETDRIVERDATA, UPDATEDRIVER } from "../../GraphQL/operations";
import Title from "./ReportAnAccidentComponents/Title";
import InputField from "./ReportAnAccidentComponents/InputField";
import ButtonField from "./ReportAnAccidentComponents/ButtonField";

const ReportAnAccident = () => {
    let history = useHistory()
    const [createAccident, { loading: loading, error: error, data: data }] =
		useMutation(CREATEACCIDENT);
    const [accidentData, setAccidentData] = useState({})
    const [returnedAccidentData, setReturnedAccidentData] = useState({})

    // const [updateDriver, {loading: loadingD, error: errorD, data: dataD}] = useMutation(UPDATEDRIVER)

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


    return (
        <View style={ReportAnAccidentStyles.container}>
            <Title />
            <InputField accidentData={accidentData} handleInput={handleInput}/>
            <Button 
                onPress={() => {
                    createAccident({
                        variables: {
                            name: accidentData.name,
                            location: accidentData.location
                        }
                    })
                }}
                title='Submit!'
                color='#ffffff'
				accessibilityLabel='Submit!'
            />
            {/* <Button 
                onPress={() => {
                    updateDriver({
                        variables: {
                            updateDriver: {
                                firstname: 'TEST FROM FRONTEND',
                                email: 'test'
                            }
                        }
                    })
                }}
                title="Test"
            /> */}
        </View>
    )
}

export default ReportAnAccident