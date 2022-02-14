import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import addChatButton from '../../../assets/NewChatroom.png'
import { useNavigation } from "@react-navigation/native";
import { ChatroomsStyles } from "../../../Styles/CommunicationStyles";

const NewChatroomButton = () => {
    const navigation = useNavigation()

    return( 
        <TouchableOpacity onPress={() => navigation.navigate("create-chat")}>
            <Image source={addChatButton} style={ChatroomsStyles.addButton} size={45}/>
        </TouchableOpacity>
     )
}
export default NewChatroomButton