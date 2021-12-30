import react from "react"
import { settings } from "../../../Styles/SettingStyles";

import { UPDATE_USER } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { useState } from "react";
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'
import { View, Button, Text, TextInput } from 'react-native'

const EditAccountInformation = () => {

    const [updateUser, { loading: loadingL, error: errorL, data: dataL }] = useMutation(UPDATE_USER);

    const [getUser, setUser] = useRecoilState(userState)
    const [getLocalChanges, setLocalChanges] = useState({})

    const handleInput = (attr, input) => {
        const updateObject = {...getLocalChanges}
        updateObject[attr] = input
        setLocalChanges(updateObject)

    }
    const handleSubmission = () => {
        let user = getLocalChanges
        let previousState = getUser
        console.log(user)
        console.log(previousState)
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
            updateUser({
                variables: {
                    updateUser: {
                        firstname: "test", //user.firstname,
                        lastname: "test", //user.lastname,
                        email: "test", //user.email,
                        phoneNumber: "test" //user.phoneNumber,
                    }
                }
            })
        }
        else{
            updateUser({
                variables: {
                    updateUser: {
                        firstname: "test", //user.firstname,
                        lastname: "test", //user.lastname,
                        email: "test", //user.email,
                        phoneNumber: "test", //user.phoneNumber,
                        passowrd: "test"
                    }
                }
            })
        }
    }

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
                onPress={() => handleSubmission(getLocalChanges)}
				title='Submit Changes'
				color='#CCCCCC'
				accessibilityLabel='UpdateUserInformation'
            />
        </View>
    )
}

export default EditAccountInformation
