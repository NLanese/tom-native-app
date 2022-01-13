import React, { useEffect } from "react"
import { UPDATEDRIVER, GETDRIVERDATA } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'
import { useHistory } from "react-router-native";
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { EditAccountInformationStyles } from "../../../Styles/SettingStyles";
import { ButtonStyles } from "../../../Styles/LandingPageStyles";
import UpdateField from "./InformationComponents/UpdateField";


const EditAccountInformation = () => {
    let history = useHistory()
    const [updateDriver, { loading: loading, error: error, data: data }] = useMutation(UPDATEDRIVER);
    const [getUser, setUser] = useRecoilState(userState)
    const [editData, setEditData] = useState({})
    const [buttonLoading, setButtonLoading] = useState(false)


	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    const handleInput = (id, information) => {
        const input = { ...editData }
        input[id] = information
        setEditData(input)
    }

    const handleSubmission = async () => {
        let user = editData
        let previousState = getUser
        if (user.passowrd){
            if (user.password.length > 7 && user.password != user.confirmPassword){
                throw new Error("Error: Passwords entered do not match")
            }
        }
        
        if (!user.firstname){
            user.firstname = previousState.firstname
        }
        if (!user.lastname){
            user.lastname = previousState.lastname
        }
        if (!user.email){
            user.email = previousState.email
        }
        if (!user.phoneNumber){
            user.phoneNumber = previousState.phoneNumber
        }
        if (!user.password){
            await updateDriver({
                variables: {
                    updateDriver: {
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email,
                        phoneNumber: user.phoneNumber,
                    }
                }
            })
        }
        else{
            await updateDriver({
                variables: {
                    updateDriver: {
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email,
                        phoneNumber: user.phoneNumber,
                        password: user.password
                    }
                }
            })
        }
        await history.push('/account_information')
    }

    return (
        <View style={EditAccountInformationStyles.container}>
            
            <View style={EditAccountInformationStyles.InputsField}>                
                <UpdateField value={getUser.firstname} field="firstname" handleInput={handleInput} />
                <UpdateField value={getUser.lastname} field="lastname" handleInput={handleInput} />
                <UpdateField value={getUser.email} field="email" handleInput={handleInput} />
                <UpdateField value={getUser.phoneNumber} field="phoneNumber" handleInput={handleInput} />
                <UpdateField value={getUser.passowrd} field="password" handleInput={handleInput} />
                <UpdateField value={getUser.passowrd} field="confirmPassword" handleInput={handleInput} />


                <View style={EditAccountInformationStyles.button}>
                    <Button 
                        mode="contained"
                        loading={buttonLoading}
                        style={ButtonStyles.logInButton}
                        titleStyle={{color: "white"}}
                        onPress={() => {
                            handleButtonLoading()
                            handleSubmission(editData)
                        }}
                    >
                        Submit Changes
                    </Button>
                </View>

            </View>

        </View>
    )
}

export default EditAccountInformation
