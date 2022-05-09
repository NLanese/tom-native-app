import React, {useState} from "react";
import { View, Text, ScrollView, Image} from "react-native";
import { Input, Icon } from "@ui-kitten/components";

import { ChatroomsStyles, ThreadCardStyles } from "../../Styles/CommunicationStyles";

import Banner from "../../Global/Banner";
import NewChatroomButton from "./CommunicationComponents/NewChatroomButton";
import ThreadCard from "./CommunicationComponents/ThreadCard";

import { useRecoilState } from "recoil";
import { userState } from "../../Recoil/atoms";

import dateObj from "../../Hooks/handleDateTime";

import glass from "../../assets/magnifyGlass.png"

const Chatrooms = () => {

    // Get current date object
    const d = new Date();

    // Recoil for User
    const [rawUser, setRawUser] = useRecoilState(userState)
        // Handles the user data
        let user
        if (rawUser.isArray){
            user = rawUser[rawUser.length - 2]
        }
        else{
            user = {...rawUser}
    }

    const [inInput, setInInput] = useState(false)

    const determineSearchStyle = () => {
        if (inInput){
            return ChatroomsStyles.searchBarActive
        }
        else{
            return ChatroomsStyles.searchBarInactive
        }
    }


    // Comparmentalizes the chatrooms
    const findChatsBy = (filter) => {
        let rArray = []
        if (filter == "everyone"){
            user.chatrooms.forEach( (chatroom) =>{
                if (chatroom.chatroomName.split(" chatroom")[0] == user.dsp.name){
                    rArray.push(chatroom)
                }
            })
        }
        if (filter == "active"){
            user.chatrooms.forEach( (chatroom) =>{
                if (chatroom.chatroomName.split(" chatroom")[0] == user.dsp.name){
                }
                else{
                    if (chatroom.messages !== null && chatroom.messages.length > 0){
                        let latestText = chatroom.messages.length - 1
                        if (dateObj(chatroom.messages[latestText].createdAt, user.dsp.timeZone).day == d.getUTCDate()){
                            rArray.push(chatroom)
                        }
                    }
                }
            })
        }
        if (filter == "inactive"){
            user.chatrooms.forEach( (chatroom) =>{
                if (chatroom.chatroomName.split(" chatroom")[0] == user.dsp.name){
                }
                else{
                    if (chatroom.messages === null || chatroom.messages.length == 0){
                        rArray.push(chatroom)
                    }
                    else{
                        let latestText = chatroom.messages.length - 1
                        if (dateObj(chatroom.messages[latestText].createdAt, user.dsp.timeZone).day != d.getUTCDate()){
                            rArray.push(chatroom)
                        }
                    }
                }
            })
        }

        return rArray
    }


    // Generates each Chatroom Card (Thread Cards)
    const generateChatCards = (list) => {
        if (list.length == 0){
            return(
                <Text style={{...ThreadCardStyles.nameText, marginTop: 11}}>No Chatrooms</Text>
            )
        }
        return list.map( (chatroom, index) => {
            if (index < list.length - 1){
                return(
                    <View key={`${index}.00`}>
                        <ThreadCard chatroom={chatroom} key={`${index}.10`}/>
                        <View style={ChatroomsStyles.divider} key={`${index}.1.5`}/>
                    </View>
                )
            }
            else{ 
                return <ThreadCard chatroom={chatroom} key={index}/>
            }
        })
    }

    // Check if no messages
    if (user.chatrooms.length < 1){
        return(
            <View>
                <Banner />
                <Text>No Messages... something went wrong</Text>
             </View>
        )
    }
    
    let scrollHeight = (user.chatrooms.length * 100) + 450

    return(
        <View>
            <Banner />
            <Text style={ChatroomsStyles.title}>Coming Soon</Text>
        </View>
    )
    return(
        <View>
            {/* BANNER */}
            <Banner />

            {/* HEADER */}
            <View style={ChatroomsStyles.headerBox}>
                <View style={ChatroomsStyles.titleBox}>
                    <Text style={ChatroomsStyles.title}>Messages</Text>
                </View>
                <View style={ChatroomsStyles}>
                    <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: 5, marginTop: 25, marginLeft: 42}}>
                        <Image source={glass} style={{height: 15, width: 15}}/>
                    </View>
                    <Input 
                        onPressIn={() =>setInInput(true)}
                        onEndEditing={() => setInInput(false)}
                        style={determineSearchStyle()}
                        textStyle={{fontFamily: 'GilroyMedium'}}
                        placeholder="            Search Chatrooms/Contacts"
                        placeholderTextColor={'#BBBBBB'}
                    />
                </View>
            </View>

            {/* THREAD HOLDER */}
            <View style={{}}> 
                <ScrollView contentContainerStyle={{height: scrollHeight}}>

                    {/* EVERYONE */}
                    <View style={ChatroomsStyles.chatroomBox}>
                        <View style={ChatroomsStyles.chatroomTitleBox}>
                            <Text style={ChatroomsStyles.chatroomBoxTitleText}>EVERYONE</Text>
                        </View>
                        <View>
                            {generateChatCards(findChatsBy("everyone"))}
                        </View>
                    </View>

                    {/* ACTIVE */}
                    <View style={ChatroomsStyles.chatroomBox}>
                        <View style={ChatroomsStyles.chatroomBoxTitleBox}>
                            <Text style={ChatroomsStyles.chatroomBoxTitleText}>ACTIVE</Text>
                        </View>
                        <View>
                            {generateChatCards(findChatsBy("active"))}
                        </View>
                    </View>

                    {/* INACTIVE */}
                    <View style={ChatroomsStyles.chatroomBox}>
                        <View style={ChatroomsStyles.chatroomBoxTitleBox}>
                            <Text style={ChatroomsStyles.chatroomBoxTitleText}>CONVERSATIONS</Text>
                        </View>
                        <View>
                            {generateChatCards(findChatsBy("inactive"))}
                        </View>
                    </View>
                    
                </ScrollView>
                <View style={{height: 30}} />
            </View>


            {/* NEW CHATROOM BUTTON */}
            <View style={ChatroomsStyles.addButtonBox}>
                <NewChatroomButton />
            </View>
        </View>
    )
}
export default Chatrooms