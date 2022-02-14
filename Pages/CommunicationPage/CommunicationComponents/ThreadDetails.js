import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Modal } from "@ui-kitten/components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../../Recoil/atoms";
import nameObj from "../../../Hooks/handleNameCaseChange";
import { ThreadDetailStyles } from "../../../Styles/CommunicationStyles";

import AddContactButton from "./AddContactButton";

const ThreadDetails = ({chatroom, setModalVisible}) => {

//--------------- Recoil and Local State ---------------
    const [user] = useRecoilState(userState)
//--------------- Recoil and Local State ---------------

//----------------- Rendering Functions -----------------

    // Returns an array of case fixed names
    const getChatroomNames = () => {
        return chatroom.guests.map( (guest, index) => {
            let caseFixed = nameObj(guest.firstname, guest.lastname)
            return (caseFixed.first + " " + caseFixed.last)
        } )
    }

    // uses getChatroomNames to generate a card for each guest
    const renderChatroomNames = () => {
        let namesList = getChatroomNames().map( (guest, index) => {
            return(
                <View style={ThreadDetailStyles.nameCard}>
                    <Text style={ThreadDetailStyles.nameText}>{guest}</Text>
                    {renderRemoveButtons()}
                </View>
            )
        })
        return (
            <ScrollView 
                contentContainerStyle={ThreadDetailStyles.namesList}
                bounces={false}
            >
                {namesList}
            </ScrollView>
        )
    }

    // Checks if you are the chatroom owner. If so, renders remove buttons
    const renderRemoveButtons = () => {
        if (chatroom.chatroomOwner.id == user.id){
            return(
                <View>
                    <TouchableOpacity >
                        <View style={ThreadDetailStyles.removeBox}>
                            <Text style={ThreadDetailStyles.removeText}>Remove</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
        else{
            return null
        }
    }

    // Checks if you are the chatroom owner, if so renders the add contacts button
    const renderAddContacts = () => {
        if (chatroom.chatroomOwner.id == user.id){
            return( <AddContactButton /> )
        }
        else{
            return null
        }
    }
//----------------- Rendering Functions -----------------


    return(
        <View style={ThreadDetailStyles.container}>
            <TouchableOpacity onPress={() => setModalVisible(false)}> 
                <View style={ThreadDetailStyles.doneBox}>
                    <Text style={ThreadDetailStyles.doneText}>Done</Text>
                </View>
            </TouchableOpacity>
            <View style={ThreadDetailStyles.nameListContainer}>
                <View style={ThreadDetailStyles.labelBox}>
                    <Text style={ThreadDetailStyles.labelText}>Chatroom Participants</Text>
                </View>
                {renderChatroomNames()}
            </View>
            {renderAddContacts()}

        </View>
    )
}
export default ThreadDetails