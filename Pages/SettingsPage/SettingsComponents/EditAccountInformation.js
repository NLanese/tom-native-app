import react from "react"
import { settings } from "../../../Styles/SettingStyles";

import { UPDATEDRIVER } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { useState } from "react";
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'
import { View, Button, Text, TextInput } from 'react-native'
import { useEffect } from "react/cjs/react.development";

const EditAccountInformation = () => {

    const [updateDriver, { loading: loading, error: error, data: data }] = useMutation(UPDATEDRIVER);

    const [getUser, setUser] = useRecoilState(userState)
    const [editData, setEditData] = useState({})

    const handleInput = (attr, input) => {
        const updateObject = { ...editData }
        updateObject[attr] = input
        setEditData(updateObject)
    }

    const handleSubmission = () => {
        let user = editData
        let previousState = getUser
        
        if (user.passowrd){
            if (user.password.length > 1 && user.password != user.confirmPassword){
                throw new Error("Error: Passwords entered do not match")
            }s
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

        if (!user.passowrd){
            updateDriver({
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
            updateDriver({
                variables: {
                    updateDriver: {
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email,
                        phoneNumber: user.phoneNumber,
                        passowrd: user.passowrd
                    }
                }
            })
        }
    }

    // useEffect(() => {
    //     if (!loading && data) {
    //         console.log(data)
    //     }
    // }, [data])

    return (
        <View>
            <Text>First Name: </Text>
            <TextInput
                placeholder={getUser.firstname}
                name='firstname'
                // style={}
                onChangeText={(firstname) => {
                    handleInput('firstname', firstname)
                }}
            />
            <Text>Last Name: </Text>
            <TextInput
                placeholder={getUser.lastname}
                name='lastname'
                // style={}
                onChangeText={(lastname) => {
                    handleInput('lastname', lastname)
                }}
            />
            <Text>Email: </Text>
            <TextInput
                placeholder={getUser.email}
                name='email'
                // style={}
                onChangeText={(email) => {
                    handleInput('email', email)
                }}
            />
            <Text>Phone Number: </Text>
            <TextInput
                placeholder={getUser.phoneNumber}
                name='phoneNumber'
                // style={}
                onChangeText={(phoneNumber) => {
                    handleInput('phoneNumber', phoneNumber)
                }}
            />
            <Text>Password: </Text>
            <TextInput
                placeholder="password"
                name='password'
                // style={}
                onChangeText={(password) => {
                    handleInput('password', password)
                }}
            />        
            <Text>Confirm Password: </Text>
            <TextInput
                placeholder="password"
                name='confirmPassword'
                // style={}
                onChangeText={(confirmPassword) => {
                    handleInput('confirmPassword', confirmPassword)
                }}
            />      
            
            <Button 
                onPress={() => handleSubmission(editData)}
				title='Submit Changes'
				color='#CCCCCC'
				accessibilityLabel='UpdateUserInformation'
            />
        </View>
    )
}

export default EditAccountInformation
