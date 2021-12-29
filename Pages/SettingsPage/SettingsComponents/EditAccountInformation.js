import react from "react"
import { settings } from "../../../Styles/SettingStyles";
import { useState } from "react";
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'
import { View, Button, Text, TextInput } from 'react-native'

const EditAccountInformation = () => {

    const [getUser, setUser] = useRecoilState(userState)
    const [getLocalChanges, setLocalChanges] = useState({})

    const handleInput = (attr, input) => {
        const updateObject = {...getLocalChanges}
        updateObject[attr] = input
        setLocalChanges(updateObject)
    }
    const handleSubmission = (localChanges) => {
        const userState = {...getUser}
        if (localChanges.firstname != "" && localChanges.firstname != null){
            userState.firstname = localChanges.firstname
        }
        if (localChanges.lastname != "" && localChanges.lastname != null){
            userState.lastname = localChanges.lastname
        }
        if (localChanges.email != "" && localChanges.email != null){
            userState.email = localChanges.email
        }
        if (localChanges.phoneNumber != "" && localChanges.phoneNumber != null){
            userState.phoneNumber = localChanges.phoneNumber
        }
        setUser(userState)
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
