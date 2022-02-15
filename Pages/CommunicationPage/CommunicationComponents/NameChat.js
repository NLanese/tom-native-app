import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Input } from "@ui-kitten/components";
import { ContactStyles } from "../../../Styles/CommunicationStyles";

const NameChat = ({handleSubmission, setModalVisible}) => {

    const [chatName, setChatName] = useState("")

    return(
        <View style={ContactStyles.modalContainer}>
            <View style={ContactStyles.modalTitleBox}>
                <Text style={ContactStyles.modalTitleText}>Name Your Conversation</Text>
            </View>
            <View style={ContactStyles.modalInput}>
                <Input 
                    onChangeText={(content) => setChatName(content)} 
                    placeholder={"Enter a Chat Name"}
                />
            </View>
            <TouchableOpacity onPress={() => handleSubmission(chatName)}>
                <View style={ContactStyles.modalContinue}>
                    <Text style={ContactStyles.modalButtonText}>Continue</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={ContactStyles.modalCancel}>
                    <Text style={ContactStyles.modalButtonText}>Cancel</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NameChat