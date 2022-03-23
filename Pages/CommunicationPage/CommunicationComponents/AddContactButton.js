import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ThreadDetailStyles } from "../../../Styles/CommunicationStyles";

const AddContactButton = ({setModalVisible}) => {
    const navigation = useNavigation()

    const handleClick = () => {
        setModalVisible(false)
        navigation.navigate("contacts")
    }

    return (
        <View style={ThreadDetailStyles.addButtonContainer}>
            <TouchableOpacity onPress={() => handleClick()}>
                <View style={ThreadDetailStyles.addContactsButton}>
                    <Text style={ThreadDetailStyles.addContactsText}>Add Contacts</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AddContactButton