import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Modal } from "@ui-kitten/components";
import { useRecoilState } from "recoil";
import { userState } from "../../../Recoil/atoms";

import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { DYNAMICREMOVEDRIVERFROMCHATROOM, GETDRIVERDATA } from "../../../GraphQL/operations";


import nameObj from "../../../Hooks/handleNameCaseChange";

import { ThreadDetailStyles } from "../../../Styles/CommunicationStyles";

import AddContactButton from "./AddContactButton";

const ThreadDetails = ({chatroom, setModalVisible, setActiveThread, activeThread}) => {

// -------------- Mutations and Queries ----------------
const {loading: loading, error: error, data: queryData, refetch: refetch} = useQuery(GETDRIVERDATA)

const [removeFromChat, { loading: loadingChat, error: errorChat, data: dataChat }] = useMutation(DYNAMICREMOVEDRIVERFROMCHATROOM);

// -------------- Mutations and Queries ----------------


//--------------- Recoil and Local State ---------------
    const [user, setUser] = useRecoilState(userState)

    // Tracks when chat guests have been removed. Enables useEffect refresh
    const [removal, setRemoval] = useState(false)

//--------------- Recoil and Local State ---------------


//----------------- Rendering Functions -----------------

    // Returns an array of case fixed names
    const getChatroomNames = () => {
        return chatroom.guests.map( (guest, index) => {
            if (typeof(guest) == 'undefined'){
                return null
            }
            let caseFixed = nameObj(guest.firstname, guest.lastname)
            let guestId = guest.id
            let name = (caseFixed.first + " " + caseFixed.last)
            return {name: name, id: guestId}
        } )
    }

    // uses getChatroomNames to generate a card for each guest
    const renderChatroomNames = () => {
        let namesList = getChatroomNames().map( (guest, index) => {
            if (typeof(guest) == 'undefined' || guest === null){
                return null
            }
            return(
                <View style={ThreadDetailStyles.nameCard}>
                    <Text style={ThreadDetailStyles.nameText}>{guest.name}</Text>
                    {renderRemoveButtons(guest.id)}
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
    const renderRemoveButtons = (guestId) => {
        if (chatroom.chatroomOwner.id == user.id && guestId != user.id){
            return(
                <View>
                    <TouchableOpacity onPress={() => handleRemoval(guestId)}>
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

//---------------------- Handlers -----------------------

    const handleRemoval = (removedId) => {
        handleRemovalMutation(removedId).then( (resolved) => {
            let newGuestList = activeThread.guests
            newGuestList = newGuestList.map((guest) => {
                if (guest.id !== removedId){
                    return guest
                }
            })
            setActiveThread({...activeThread, guests: newGuestList})
        })
    }

    const handleRemovalMutation = async (removedId) => {
        return removeFromChat({
            variables: {
                role: user.role,
                chatroomId: chatroom.id,
                guestId: removedId
            }
        })
    }

//---------------------- Handlers -----------------------


//--------------------- useEffects ----------------------

    // useEffect( async () => {
    //     if (removal){
    //         console.log("hit2")
    //         await refetch()
    //         console.log(queryData.getDriver.weeklyReport)
    //         await setUser(queryData)
    //     }
    // }, [removal])

//--------------------- useEffects ----------------------


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