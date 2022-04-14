import React, {useState, useEffect} from "react";
import { ContactStyles } from "../../Styles/CommunicationStyles";
import { View, Text, ScrollView, TouchableOpacity, Touchable } from 'react-native'
import { Modal } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { DRIVERS_GET_DRIVERS_FROM_DSP } from "../../GraphQL/operations";

import Banner from "../../Global/Banner";
import Loading from "../../Global/Loading";
import SearchBar from "../CommunicationPage/CommunicationComponents/SearchBar";
import NameChat from "../CommunicationPage/CommunicationComponents/NameChat";

import { useRecoilState } from 'recoil'
import { threadState, userState } from "../../Recoil/atoms";

import nameObj from "../../Hooks/handleNameCaseChange";
import handlePicture from "../../Hooks/handlePicture";

const Roster = ({contacts}) => {
    const navigation = useNavigation()

    // Gets all Drivers from DSP
    const {loading: loading, error: error, data: queryData} = useQuery(DRIVERS_GET_DRIVERS_FROM_DSP)


// -------------------- Recoil and UseState ----------------------
    // Recoil
        // Gets User
        const [user, setUser] = useRecoilState(userState);
        // Gets Thread
        const [activeThread, setActiveThread] = useRecoilState(threadState)
    
    // UseState
        // keeps track of driver contacts added to groupchat
        const[newGuests, setNewGuests] = useState([])
        
        // Keeps track of contents in the search bar
        const [searchVal, setSearchVal] = useState("")

        // Tracks whether or not changes have been submitted. Guards useEffect
        const[changesMade, setChangesMade] = useState(false)

// -------------------- Recoil and UseState ----------------------


    
// --------------- Rendering and Generating Functions ------------ 

    // renders all inputted possible contacts
    const renderRoster = (list) => {
        let i = 0
        return( list.map( (driver) => {
            const namer = nameObj(driver.firstname, driver.lastname)
            i++
            return(
                <View style={ContactStyles.card} key={i}>
                    <View style={ContactStyles.image}>{handlePicture(driver.profilePick, 55)}</View>
                    <View style={ContactStyles.nameView}>
                        <Text style={ContactStyles.title}>{namer.first} {namer.last} </Text>
                        <Text style={ContactStyles.subtitle}>{driver.__typename}</Text>
                    </View>
                    <View style={ContactStyles.divider} />
                </View>
            )
        }))
    }

    // Called when no filter is applied, seperates by letter
    const renderByLetter = (list) => {
        const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        return letters.map( (letter, index) => {

            let letterBlockList = []
            list.forEach( (contact) => {
                if (contact.firstname[0] == letter){
                    letterBlockList.push(contact)
                }
            })
            if (letterBlockList.length > 0){
                return(
                    <View key={index}>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 10,
                            marginBottom: 10,
                            fontFamily: "GilroyBold",
                            fontSize: 15,
                            color: "#888888"
                        }}>{letter}</Text>
                        <View>
                            {renderRoster(letterBlockList)}
                        </View>
                    </View>
                )
            }
            else{
                return null
            }
            
        })
    }

    // Filters based off of the name typed in
    const filterBasedOffSearch = (list) => {
        let filteredList = []
        if (searchVal == ""){
            return list
        }
        else{
            let filterString = searchVal.toUpperCase()
            list.forEach( (driver) => {
                if (driver.firstname.includes(filterString) || driver.lastname.includes(filterString)){
                    filteredList.push(driver)
                }
            })
            return filteredList
        }
    }

    // Uses all 4 functions to create the screen
    const determineRosterDisplay = (list) => {
        if (searchVal != ""){
            return(
                renderRoster(filterBasedOffSearch(list))
            )
        }
        else{
            return(
                renderByLetter(list)
            )
        }
    }

// --------------- Rendering and Generating Functions ------------   


// -------------------------- Handlers ---------------------------

    const handleSetSearch = (content) => {
        setSearchVal(content)
    }

// -------------------------- Handlers ---------------------------


    if (!loading && queryData){
        let allContacts = [...queryData.driverGetDriversFromDsp.drivers]

        return (
            <View>
                <Banner />

                <View style={ContactStyles.header}>
                    <View style={ContactStyles.searchBar}>
                        <Text style={ContactStyles.mainTitle}>{allContacts.length} Contacts</Text>
                        <SearchBar setSearch={handleSetSearch} />
                    </View>
                </View>

                <View >
                    <ScrollView contentContainerStyle={ContactStyles.container}>
                        {determineRosterDisplay(allContacts)}
                    </ScrollView>
                </View>

            </View>
        )
    }
    else{
        return(
            <Loading />
        )
    }
}
export default Roster