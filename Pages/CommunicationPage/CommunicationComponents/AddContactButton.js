import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThreadDetailStyles } from "../../../Styles/CommunicationStyles";

const AddContactButton = () => {

    return (
        <View style={ThreadDetailStyles.addButtonContainer}>
            <TouchableOpacity>
                <View>
                    <Text>Add Contacts</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AddContactButton