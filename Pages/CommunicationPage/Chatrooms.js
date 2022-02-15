import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Input, Icon } from "@ui-kitten/components";
import Banner from "../../Global/Banner";
import { ChatroomsStyles, ThreadCardStyles } from "../../Styles/CommunicationStyles";
import { useRecoilState } from "recoil";
import { userState } from "../../Recoil/atoms";
import ThreadCard from "./CommunicationComponents/ThreadCard";
import dateObj from "../../Hooks/handleDateTime";
import NewChatroomButton from "./CommunicationComponents/NewChatroomButton";

const Chatrooms = () => {

    // Get current date object
    const d = new Date();

    // Recoil for User
    const [rawUser, setRawUser] = useRecoilState(userState)
        // Handles the user data
        let user
        if (rawUser.isArray){
            user = rawUser[0]
        }
        else{
            user = {...rawUser}
    }

    // Magnifying Glass Icon for Search Bar
    const magnifyGlassIcon = () => {
        return( 
            <Icon name={'search-outline'} />
        )
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
                    if (chatroom.messages !== null){
                        if (dateObj(chatroom.messages[0].createdAt, user.dsp.timeZone).day == d.getUTCDate()){
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
                    if (chatroom.messages === null){
                        rArray.push(chatroom)
                    }
                    else{
                        if (dateObj(chatroom.messages[0].createdAt, user.dsp.timeZone).day !== d.getUTCDate()){
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
            if (index < chatroom.length - 1){
                return(
                    <View>
                        <ThreadCard chatroom={chatroom} key={index}/>
                        <View style={ChatroomsStyles.divider} />
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
                    <Input 
                        style={ChatroomsStyles.searchBar}
                        textStyle={{fontFamily: 'GilroyMedium'}}
                        placeholder="Search Chatrooms/Contacts"
                        placeholderTextColor={'#BBBBBB'}
                        // accessoryLeft={magnifyGlassIcon}
                    />
                </View>
            </View>

            {/* THREAD HOLDER */}
            <ScrollView >

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
            
            {/* NEW CHATROOM BUTTON */}
            <View style={ChatroomsStyles.addButtonBox}>
                <NewChatroomButton />
            </View>
        </View>
    )
}
export default Chatrooms