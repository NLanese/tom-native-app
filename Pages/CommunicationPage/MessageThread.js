import { CommunicationStyles } from "../../Styles/CommunicationStyles";

import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { TextInput, Avatar } from 'react-native-paper';
import { Modal } from '@ui-kitten/components';

import { userState } from '../../Recoil/atoms'
import { useMutation } from '@apollo/client';

import { useRecoilState } from "recoil";
import { threadState } from "../../Recoil/atoms";

import { DRIVERSENDMESSAGE, GETDRIVERCHATROOMS } from "../../GraphQL/operations";

import Message from "./CommunicationComponents/Message";
import Banner from '../../Global/Banner'
import ThreadDetails from "./CommunicationComponents/ThreadDetails"
import Loading from "../../Global/Loading"

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const MessageThread = () => {

// ---------------------- Mutations and Queries ------------------------
const [sendMessage, { loading: loadingMsg, error: errorMsg, data: dataMsg }] = useMutation(DRIVERSENDMESSAGE);
// ---------------------- Mutations and Queries ------------------------


    // Recoil for thread Data
    const [activeThread, setActiveThread] = useRecoilState(threadState);

    // Tracks message sending status
    const [updating, setUpdating] = useState(false)

// -------------------- Pre Mounting Functions -------------------------
    // Tracks the contents of any current message
    const [newMessage, setNewMessage] = useState("")

    // Determines whether or not the keyboard is visible
    const [KeyboardVisible, setKeyboardVisible] = useState(false);

    // Gets User State from Recoil
    const [user] = useRecoilState(userState)

    const [modalvisible, setModalVisible] = useState(false)

    // Allows us to tell ScrollView to go to the bottom upon a message send
    const scrollViewRef = useRef();
// -------------------- Pre Mounting Functions -------------------------



// ----------------- Render / Styling Functions ------------------------
    // Adjusts the height of the text input box, based on how long the text is
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

    // Adjusts the positioning of the Input
    const determineInputTop = (message) => {
        if (message.length > 168){
            return -maxHeight * 0.52
        }
        else if (message.length > 61){
            return -maxHeight * 0.44
        }
        else{
            return maxHeight * -0.4
        }
    }

    // Determines the keyboard status and styling
    const determineKeyboardStyle = (status, message) => {
        if (status){
            return StyleSheet.create({
                height: determineInputHeight(message),
                top: determineInputTop(message),
            })
        }
        else{
            return StyleSheet.create({
                height: maxHeight * 0.04,
                top: -maxHeight * 0.032,
                marginLeft: 2,
            })
        }
    } 

    // Adjusts letter casing for labels
    const makeLowerCase = (word) => {
        return word[0] + word.slice(1).toLowerCase()
    }

    // Controls Keyboard Deployment
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

    // Handles rerender

    // Generates all of the messages
    const renderMessageFeed = (messageData) => {
        if (messageData === null){
            return <Text>No Messages</Text>
        }
        if (Object.keys(messageData) < 1){
            return null
        }else{
            const messages = messageData.map( (message, key) => {

                // Renders sender name
                let propFrom = ""
                if (message.from == userData.firstname){
                    propFrom = "You"
                }
                else{
                    propFrom = message.from
                }

                // Calls upon Message Component
                return(
                    <Message setActiveThread={setActiveThread} from={propFrom} content={message.content} dateSent={message.createdAt} key={key}/>
                )
            })

            // Renders the Message Component and Name Label
            return (<View> 
                        <View>
                            {messages}
                        </View>
                        <View style={{height: 50}}/>
                    </View>
                    )
        }
    }
// ----------------- Render / Styling Functions ------------------------

// ----------------------- Handler Functions ---------------------------
    const handleInfoClick = () => {
        setModalVisible(true)
    }

    const handleSendMessage = async () => {
        console.log(activeThread.id)
        if (newMessage.length > 0){
             return sendMessage({
                variables: {
                    chatroomId: activeThread.id,
                    content: newMessage
                }
            }).then( async (newMessageThread) => {
                await setUpdating(true)
                await setNewMessage("")
                await setKeyboardVisible(false);
                await setActiveThread(newMessageThread)
            }).then( async() => {
                await console.log(activeThread)
                await setUpdating(false)
            })
        }
        else{
        }
    }


// ---------------------- MAIN RENDER METHOD -----------------------
    if (updating){
        return(
            <Loading />
        )
    }
    return(
        <View>
            <Banner />
            <View style={CommunicationStyles.container}>

                {/* INFORMATION MODAL */}
                <Modal visible={modalvisible}>
                        <ThreadDetails setModalVisible={setModalVisible} chatroom={activeThread} setActiveThread={setActiveThread}/>
                </Modal>

                {/* Chatroom Label */}
                <TouchableWithoutFeedback onPress={() => handleInfoClick()} style={{borderWidth: 2, borderColor: " red", position: 'absolute'}}>
                    <View style={CommunicationStyles.threadLabel}>
                        <Text style={CommunicationStyles.labelText}>{activeThread.chatroomName.split(" chatroom")[0]}</Text>
                        <View>
                            <View style={{height: 35, width: 35, marginTop: 10, borderRadius: 100, backgroundColor: 'black'}}/>
                        </View>
                    </View >
                </TouchableWithoutFeedback>

                {/* Chatroom Message Content */}
                <View style={CommunicationStyles.threadContainer}>
                    <View style={CommunicationStyles.thread}>
                        <ScrollView 
                            containerStyle={CommunicationStyles.thread}
                            ref={scrollViewRef}
                            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                            // onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
                        >
                            {renderMessageFeed(activeThread.messages)}
                        </ScrollView>
                        <View style={{height: 30}} />
                    </View>
                </View>

                {/* THE MESSAGE INPUT AREA */}
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

                    {/* SEND MESSAGE BUTTON */}
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

}
export default MessageThread