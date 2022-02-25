import React from "react";

import { threadState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import { View, Text, TouchableOpacity } from "react-native";
import { ThreadCardStyles } from "../../../Styles/CommunicationStyles";
import { useNavigation } from "@react-navigation/native";

const ThreadCard = ({chatroom}) => {
    const navigation = useNavigation()

    // Recoil for thread Data
    const [thread, setThread] = useRecoilState(threadState);

    // Generates the preview of the last text
    const generatePreview = () => {
        if (chatroom.messages === null || chatroom.messages.length < 1){
            return "No Messages"
        }
        let latestText = chatroom.messages.length - 1
        if (chatroom.messages[latestText].content.split("").length > 70){
            return (chatroom.messages[latestText].content.slice(0, 70) + "...")
        }
        return chatroom.messages[latestText].content
    }

    // Generates the group chat name title
    const generateTitle = () => {
        if (chatroom.chatroomName.split("").length > 20){
            return (chatroom.chatroomName.slice(0, 20) + "...")
        }
        else{ return chatroom.chatroomName }
    }

    // Sets which thread will be rendered in the MessageThread screen as well as pulling the screen itself
    const selectThread = async () => {
        await setThread(chatroom)
        await navigation.navigate('message-thread')
    }

    

    return(
        <View style={{height: 'auto'}}> 
            <TouchableOpacity onPress={() => selectThread()}>
            <View>
                <View style={{width: 40, height: 40, borderRadius: 100, backgroundColor: 'black', marginBottom: 17, marginTop: 24}} />
                <View style={ThreadCardStyles.threadName}>
                    <Text style={ThreadCardStyles.nameText}>{generateTitle()}</Text>
                </View>
                <View style={ThreadCardStyles.previewBox}>
                    <Text style={ThreadCardStyles.previewText}>{generatePreview()}</Text>
                </View>
            </View>
            </ TouchableOpacity >
        </View>
    )
} 

export default ThreadCard