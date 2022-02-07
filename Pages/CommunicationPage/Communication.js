import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { TextInput, Avatar } from 'react-native-paper';
import { useQuery } from "@apollo/client";
import { userState } from '../../Recoil/atoms'
import { useMutation } from '@apollo/client';
import { useRecoilState } from "recoil";
import { GETDRIVERMESSAGESWITHADMIN, SENDMESSAGETOADMIN } from "../../GraphQL/operations";
import { ActivityIndicator } from "react-native-paper";
import Message from "./CommunicationComponents.js/Message";
import { CommunicationStyles } from "../../Styles/CommunicationStyles";
import SomeDudesFace from '../../assets/SomeDudesFace.jpeg'
import Banner from '../../Global/Banner'

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const Communication = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERMESSAGESWITHADMIN)
    const [sendMessage, { loading: loadingMsg, error: errorMsg, data: dataMsg }] =
        useMutation(SENDMESSAGETOADMIN);

    const [refresh, setRefresh] = useState(false)
    const [messageData, setMessageData] = useState({})
    const [userData] = useRecoilState(userState)
    const [newMessage, setNewMessage] = useState("")
    const [KeyboardVisible, setKeyboardVisible] = useState(false);
    const scrollViewRef = useRef();


    useEffect(() => {
        if (!loadingMsg && dataMsg) {
            refetch()
        }
    }, [dataMsg])

    
    const renderMessageFeed = (messageData) => {
        if (Object.keys(messageData) < 1){
            return null
        }else{
            const messages = messageData.map( (message, key) => {
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
            return (<View> 
                        <View>
                            {messages}
                        </View>
                        <View style={{height: 50}}/>
                    </View>)
        }
    }

    const determineKeyboardStyle = (status, message) => {
        if (status){
            return StyleSheet.create({
                height: determineInputHeight(message),
                top: determineInputTop(message),
            })
        }
        else{
            return StyleSheet.create({
                height: maxHeight * 0.05,
                top: -maxHeight * 0.0099,
                marginLeft: 5,
            })
        }
    } 

    const determineInputHeight = (message) => {
        if (message.length > 168){
            return maxHeight * 0.2
        }
        else if (message.length > 69){
            return maxHeight * 0.12
        }
        else{
            return maxHeight * 0.08
        }
    }

    const determineInputTop = (message) => {
        if (message.length > 168){
            return -maxHeight * 0.52
        }
        else if (message.length > 61){
            return -maxHeight * 0.44
        }
        else{
            return -maxHeight * 0.4 
        }
    }

    const makeLowerCase = (word) => {
        return word[0] + word.slice(1).toLowerCase()
    }

    const handleSendMessage = async (msg) => {
        if (newMessage.length > 0){
            await sendMessage({
                variables: {
                    content: msg
                }
            })
            await setNewMessage("")
            await setKeyboardVisible(false);
        }
        else{
            console.log("No message")
        }
    }

    // KEYBOAARD SETTINGS
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
    }, [refresh, data])


    if (!loading && !error && data) {
        return (
        <View>
            <Banner />
            <View style={CommunicationStyles.container}>

                <View style={CommunicationStyles.threadLabel}>
                    <View style={CommunicationStyles.labelAvatar}>
                        <Avatar.Image
                            source={SomeDudesFace}
                            size={40}
                        />
                    </View>
                    <View style={CommunicationStyles.labelName}>
                        <Text>Admin {makeLowerCase(userData.adminFirstname)} {makeLowerCase(userData.adminLastname)}</Text>
                    </View>
                </View >
                <View style={CommunicationStyles.threadContainer}>
                    <View style={CommunicationStyles.thread}>
                        <ScrollView 
                            containerStyle={CommunicationStyles.thread}
                            ref={scrollViewRef}
                            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                            // onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
                        >
                            {renderMessageFeed(messageData)}
                        </ScrollView>
                    </View>
                </View>
                <View style={determineKeyboardStyle(KeyboardVisible, newMessage)}>
                    <TextInput
                        mode="outlined"
                        dense={true}
                        multiline={true}
                        style={{
                            height: determineInputHeight(newMessage),
                            width: maxWidth - 60,
                            marginRight: 5,
                        }}
                        selectionColor='#24296f'
                        activeOutlineColor='#24296f'
                        activeUnderlineColor='#24296f'
                        onChangeText={(input) => {
                            setNewMessage(input)
                        }}
                        value={newMessage}
                    />
                    <TouchableWithoutFeedback onPress={ () => handleSendMessage(newMessage) }>
                        <View style={CommunicationStyles.sendButton}>
                            <Text style={{textAlign: 'center', fontWeight: '800'}}>
                                Send
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
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
