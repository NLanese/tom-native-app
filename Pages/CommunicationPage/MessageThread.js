import { CommunicationStyles } from "../../Styles/CommunicationStyles";

import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { TextInput, Avatar } from 'react-native-paper';
import { Modal } from '@ui-kitten/components';

import { userState } from '../../Recoil/atoms'
import { useMutation } from '@apollo/client';

import { useRecoilState } from "recoil";
import { websiteState } from "../../Recoil/atoms";
import { threadState } from "../../Recoil/atoms";

import dateObj from "../../Hooks/handleDateTime";

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

    // Tracks website state
    const [website, setWebsite] = useRecoilState(websiteState)

// -------------------- Pre Mounting Functions -------------------------
    // Tracks the contents of any current message
    const [newMessage, setNewMessage] = useState("")

    // Determines whether or not the keyboard is visible
    const [KeyboardVisible, setKeyboardVisible] = useState(false);

    // Gets User State from Recoil
    const [user, setUser] = useRecoilState(userState)

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
      
        const messages = messageData.map( (message, index) => {

            console.log(index)

            // Renders sender name
            let propFrom = ""
            if (message.from.id == user.id ){
                propFrom = "You"
            }
            else{
                propFrom = message.from
            }

            // Sets Display Null Values
            let displayTime = false
            let displayName = false
            let displayIcon = false

            // Determines if you need to display time sent above
            if (index == 0){
                displayTime = true
                displayName = true
            }

            // handles time / name display booleans
            if (index != 0){

                // All for time boolean
                let thisSendTime = dateObj(message.createdAt, user.dsp.timeZone)
                let lastSendTime = dateObj(messageData[index - 1].createdAt, user.dsp.timeZone)
                if (thisSendTime.day != lastSendTime.day){
                    displayTime = true
                }
                else{
                    let thisTotal = 0
                    let lastTotal = 0

                    thisTotal += thisSendTime.hour
                    if (thisSendTime.am_pm == "PM"){
                        thisTotal = thisTotal * 2
                    }
                    lastTotal += lastSendTime.min

                    lastTotal += lastSendTime.hour
                    if (lastSendTime.am_pm == "PM"){
                        lastTotal = lastTotal * 2
                    }
                    lastTotal += lastSendTime.min
                    
                    if (thisTotal - 30 > lastTotal){
                        displayTime = true
                    }
                }

                // All for name boolean
                if (messageData[index - 1].from.id != message.from.id){
                    displayName = true
                }

                // For Icon
                let next = index + 1
                console.log(index)
                if (messageData.length > index){
                    if (messageData[next]){
                        if (messageData[next].from.id != message.from.id){
                            displayIcon = true
                        }
                    }
                    
                }

            }


            // Calls upon Message Component
            return(
                <Message 
                    setActiveThread={setActiveThread} 
                    from={propFrom} 
                    content={message.content} 
                    dateSent={message.createdAt} 
                    key={index} 
                    displayTime={displayTime}
                    displayName={displayName}
                    displayIcon={displayIcon}
                />
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
// ----------------- Render / Styling Functions ------------------------

// ----------------------- Handler Functions ---------------------------

    const handleSendMessage = () => {
        if (newMessage.length > 0){
             handleMutation().then( (resolved) => { // This line fixed all the promise issues
                setNewMessage("") // clears current message input
                let newActiveThread = resolved.data.driverSendMessage.chatroom // creates new thread JSON from mutation data
                setActiveThread(newActiveThread) // Sets current thread to match the new one

                // changes the entire user state, leaving all over threads untouched but updating the current one
                let updatedThreads = [newActiveThread]
                user.chatrooms.forEach( (chat) => {
                    if (chat.id == newActiveThread.id){
                    }
                    else {
                        updatedThreads.push(chat)
                    }
                })


                // changes the main recoil state
                setUser({...user, chatrooms: updatedThreads})
            })
        }
        else{
            // Throw Error Handling for no input or just do nothing, we'll see
        }
    }

    const handleMutation = async () => {
        return sendMessage({
            variables: {
                chatroomId: activeThread.id,
                content: newMessage
            }
        })
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