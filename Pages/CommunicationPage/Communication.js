import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { TextInput } from 'react-native-paper';
import { useQuery } from "@apollo/client";
import { userState } from '../../Recoil/atoms'
import { useMutation } from '@apollo/client';
import { useRecoilState } from "recoil";
import { GETDRIVERMESSAGESWITHADMIN, SENDMESSAGETOADMIN } from "../../GraphQL/operations";
import { ActivityIndicator } from "react-native-paper";
import Message from "./CommunicationComponents.js/Message";
import { CommunicationStyles } from "../../Styles/CommunicationStyles";


let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const Communication = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERMESSAGESWITHADMIN)
    const [sendMessage, { loadingMsg: loadingMsg, errorMsg: errorMsg, dataMsg: dataMsg }] =
        useMutation(SENDMESSAGETOADMIN);

    const [refresh, setRefresh] = useState(false)
    const [messageData, setMessageData] = useState({})
    const [userData] = useRecoilState(userState)
    const [newMessage, setNewMessage] = useState("")
    const [KeyboardVisible, setKeyboardVisible] = useState(false);

    
    const renderMessageFeed = (messageData) => {
        if (Object.keys(messageData) < 1){
            return null
        }else{
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
    }

    const determineKeyboardStyle = (status, message) => {
        if (status){
            return StyleSheet.create({
                height: determineInputHeight(message),
                top: determineInputTop(message),
                marginLeft: 5
            })
        }
        else{
            return StyleSheet.create({
                height: maxHeight * 0.05,
                top: maxHeight * .82,
                marginLeft: 5,
            })
        }
    } 

    const determineInputHeight = (message) => {
        if (message.length > 72){
            return maxHeight * 0.12
        }
        else if (message.length > 108){
            return maxHeight * 0.2
        }
        else{
            return maxHeight * 0.08
        }
    }

    const determineInputTop = (message) => {
        if (message.length > 72){
            return maxHeight * 0.36
        }
        else if (message.length > 102){
            return maxHeight * 0.3
        }
        else{
            return maxHeight * 0.41
        }
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
              setKeyboardVisible(true); // or some other action
            }
          );
          const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
              setKeyboardVisible(false); // or some other action
            }
          );
        return () => {
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
        };
      }, []);

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


    if (!loading && !error && data) {
        return (
            <View style={CommunicationStyles.container}>
                <View style={CommunicationStyles.threadContainer}>
                    <ScrollView containerStyle={CommunicationStyles.thread}>
                        {renderMessageFeed(messageData)}
                    </ScrollView>
                </View>
                <View style={determineKeyboardStyle(KeyboardVisible, newMessage)}>
                    <TextInput
                        mode="outlined"
                        dense={true}
                        multiline={true}
                        style={{
                            height: determineInputHeight(newMessage),
                            width: maxWidth - 60,
                            marginRight: 5
                        }}
                        selectionColor='#24296f'
                        activeOutlineColor='#24296f'
                        activeUnderlineColor='#24296f'
                        onChangeText={(input) => {
                            setNewMessage(input)
                        }}
                    />
                    <TouchableWithoutFeedback >
                        <View style={CommunicationStyles.sendButton}>
                            <Text>
                                Send
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
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
