import React, { useState } from "react"
import { View, TouchableOpacity, Text, Dimensions } from 'react-native'

import Gradient from "../../../../Components/Gradient";

import { useNavigation } from "@react-navigation/native";

import { useMutation } from "@apollo/client";
import { UPDATEDRIVER } from "../../../../GraphQL/operations";


import { AccountInformationStyles } from "../../../../Styles/SettingStyles";


const EditAccountInformationButton = ({edit, setEdit, currentSettings}) => {
    const navigation = useNavigation()
    const [buttonLoading, setButtonLoading] = useState(false)

    const [update, { loading: loading, error: error, data: data }] = useMutation(UPDATEDRIVER);

    const handleMutation = async () => {
        return update({
            variables: {
                email: currentSettings.user,
                firstname: currentSettings.firstname,
                lastname: currentSettings.lastname
            }
        })
    }
	
    const handleClick = () => {
        if (edit){
            setEdit(false)
            return(
                handleMutation()
                    .then( (resolved) => {
                    })
                )
        }
        if (!edit){
            setEdit(true)
        }
    }

    const determineText = () =>{
        if (edit){
            return "SUBMIT CHANGES"
        }
        else{
            return "EDIT ACCOUNT INFORMATION"
        }
    }

    return (
        <View style={{marginBottom: 20}}>
            <TouchableOpacity onPress={() => handleClick()}>
                <Gradient
                    colorOne={"#534FFF"}
                    colorTwo={"#15A1F1"}
                    style={{
                        height: 50,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={AccountInformationStyles.buttonText}>{determineText()}</Text>
                </Gradient>
            </TouchableOpacity>
        </View>
    )
}

export default EditAccountInformationButton
