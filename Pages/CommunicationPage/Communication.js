import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper';
import { useQuery } from "@apollo/client";
import { userState } from '../../Recoil/atoms'
import { useRecoilState } from "recoil";
import { GETDRIVERMESSAGESWITHADMIN } from "../../GraphQL/operations";
import { ActivityIndicator } from "react-native-paper";
import Message from "./CommunicationComponents.js/Message";
import { CommunicationStyles } from "../../Styles/CommunicationStyles";

const Communication = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERMESSAGESWITHADMIN)
    const [refresh, setRefresh] = useState(false)
    const [messageData, setMessageData] = useState({})
    const [userData] = useRecoilState(userState)
    const [newMessage, setNewMessage] = useState("")

    const renderMessageFeed = (messageData) => {
        return messageData.map( (message, key) => {
            let propFrom = ""
            if (message.from == userData.firstname){
                propFrom = "You"
            }
            else{
                propFrom = message.from
            }
            key++
            return(
                <Message from={propFrom} content={message.content} dateSent={message.createdAt} key={key}/>
            )
        })
    }


    useEffect(() => {
        setTimeout(() => {
            setRefresh(!refresh)
        }, 500)
    }, [])
    
    useEffect(() => {
        if (!loading && data) {
            setMessageData(data.getMessageWithAdmin)
        }
    }, [refresh])


    if (messageData[0]) {
        return (
            <View style={CommunicationStyles.container}>
                <ScrollView containerStyle={CommunicationStyles.thread}>
                    {renderMessageFeed(messageData)}
                </ScrollView>
                <View style={CommunicationStyles.createMessage}>
                    <View style={CommunicationStyles.newMessageAddress}>
                        <Text>New Message to {userData.adminFirstname} {userData.adminLastname}</Text>
                    </View>
                    <TextInput
                        // style={UpdateFieldStyles.Input}
                        selectionColor='#24296f'
                        activeOutlineColor='#24296f'
                        activeUnderlineColor='#24296f'
                        // label={labelMaker(props.field)}
                        onChangeText={(input) => {
                            setNewMessage(input)
                        }}
                    />
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
                <ActivityIndicator animating={true} size='large' color={'#570de4'} style={{padding: 3, marginRight: 8}}/>
            </View>
          )
    }
}

export default Communication