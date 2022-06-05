import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import addChatButton from '../../../assets/NewChatroom.png'
import { useNavigation } from "@react-navigation/native";
import { ChatroomsStyles } from "../../../Styles/CommunicationStyles";

import { websiteState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

const NewChatroomButton = () => {
    const navigation = useNavigation()

    const [website, setWebsite] = useRecoilState(websiteState)

    const handleClick = () => {
        setWebsite({current: "Create Chatroom", previous: website.current, saved: website.saved})
        navigation.navigate("create-chat")
    }

    return( 
        <TouchableOpacity onPress={() => handleClick()}>
            <Image source={addChatButton} style={ChatroomsStyles.addButton} size={45}/>
        </TouchableOpacity>
     )
}
export default NewChatroomButton