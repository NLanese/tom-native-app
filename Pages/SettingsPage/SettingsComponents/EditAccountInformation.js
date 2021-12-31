import React, { useEffect } from "react"
import { UPDATEDRIVER, GETDRIVERDATA } from "../../../GraphQL/operations";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'
import { useHistory } from "react-router-native";
import { View, Button, Text, TextInput } from 'react-native'
import NavBar from '../../../Global/NavBar'
import { EditAccountInformationStyles } from "../../../Styles/SettingStyles";


const EditAccountInformation = () => {
    let history = useHistory()
    const [updateDriver, { loading: loading, error: error, data: data }] = useMutation(UPDATEDRIVER);
    const [getUser, setUser] = useRecoilState(userState)
    const [editData, setEditData] = useState({})

    const handleInput = (id, information, event) => {
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
            <NavBar />
            
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
                    color='#ffffff'
                    accessibilityLabel='UpdateUserInformation'
                    />
            </View>
        </View>
    )
}

export default EditAccountInformation
