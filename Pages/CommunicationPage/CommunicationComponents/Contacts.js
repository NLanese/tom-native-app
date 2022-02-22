import React, {useState, useEffect} from "react";
import { ContactStyles } from "../../../Styles/CommunicationStyles";
import { View, Text, ScrollView, TouchableOpacity, Touchable } from 'react-native'
import { Modal } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { DRIVERSGETDRIVERSFROMDSP, DRIVERCREATECHATROOM } from "../../../GraphQL/operations";

import Banner from "../../../Global/Banner";
import Loading from "../../../Global/Loading";
import SearchBar from "./SearchBar";
import NameChat from "./NameChat";

import { useRecoilState } from 'recoil'
import { threadState, userState } from "../../../Recoil/atoms";

import nameObj from "../../../Hooks/handleNameCaseChange";

const Contacts = ({creating}) => {
    const navigation = useNavigation()

    // Gets all Drivers from DSP
    const {loading: loading, error: error, data: queryData} = useQuery(DRIVERSGETDRIVERSFROMDSP)


    const [driverCreateChat, { loading: loadingChat, error: errorChat, data: dataChat }] = useMutation(DRIVERCREATECHATROOM);


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

        // Triggers or cancels the Modal
        const [modalVisible, setModalVisible] = useState("")

        // Tracks whether or not changes have been submitted. Guards useEffect
        const[changesMade, setChangesMade] = useState(false)

        // For Add Contacts only
        const [newAddThread, setNewAddThread] = useState("")
// -------------------- Recoil and UseState ----------------------


    
// --------------- Rendering and Generating Functions ------------   
    const renderRoster = (list) => {
        let i = 0
        return( list.map( (driver) => {
            const namer = nameObj(driver.firstname, driver.lastname)
            i++
            return(
                <View style={ContactStyles.card} key={i}>
                    <View style={ContactStyles.image}><Text>Image</Text></View>
                    <View style={ContactStyles.nameView}><Text style={ContactStyles.title}>{namer.first} {namer.last} </Text></View>
                    {determineAddOrRemove(driver)}
                    <View style={ContactStyles.divider} />
                </View>
            )
        }))
    }

    const determineAddOrRemove = (selected) => {
        let returnComponent
        returnComponent = () => {
            return(
                <TouchableOpacity style={ContactStyles.addButton} onPress={() => handleAddClick(selected)}>
                    <View><Text style={ContactStyles.addText}>Add</Text></View>
                </TouchableOpacity>
            )
        }
        if (creating){
            if (newGuests.length > 0){
                newGuests.forEach( (driver) => {
                    if (driver.id === selected.id){
                        returnComponent = () => {
                            return(
                                <TouchableOpacity style={ContactStyles.removeButton} onPress={() => handleRemoveClick(selected)}>
                                    <View><Text style={ContactStyles.removeText}>Remove</Text></View>
                                </TouchableOpacity>
                            )
                        }
                    }
                })
            }
        } else {
            let newThread = activeThread.guests.map((driver) =>{ return driver })
            if (newThread.length > 0){
                newThread.forEach( (driver) => {
                    if (driver.id === selected.id){
                        if (driver.id === user.id){
                            returnComponent = () => {
                                return(
                                    null
                                )
                            }
                        }
                        else{
                            returnComponent = () => {
                                return(
                                    <TouchableOpacity style={ContactStyles.removeButton} onPress={() => handleRemoveClick(selected)}>
                                        <View><Text style={ContactStyles.removeText}>Remove</Text></View>
                                    </TouchableOpacity>
                                )
                            }
                        }
                    }
                })
            }
        }
        return returnComponent()
    }

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

// --------------- Rendering and Generating Functions ------------   


// -------------------------- Handlers ---------------------------
    const handleAddClick = (selected) => {
        setNewGuests([...newGuests, selected])
        if (!creating){
            activeThread.guests = [...activeThread.guests, selected]
        }
    }

    const handleRemoveClick = (selectedId) => {
        let newestVersion = []
        newGuests.forEach( (guest) => {
            if (guest !== selectedId){
                newestVersion.push(guest)
            }
        })
        setNewGuests(newestVersion)
    }

    const handleSetSearch = (content) => {
        setSearchVal(content)
    }

    const handleDoneClick = () => {
        if (!creating){
            // Add Mutation
        }
        if (newGuests.length > 0){
            setModalVisible(true)
        }
    }

    const handleSubmission = (chatName) => {
        if (chatName.length < 1){
            return null
        }
        handleMutation(chatName).then( (resolved) => {
            let newActiveThread = resolved.data.driverCreateChatroom // creates new thread JSON from mutation data
            setActiveThread(newActiveThread)
            let oldThreads = user.chatrooms
            oldThreads.forEach( (thread, index) => {
            })
            let revisedThreads = [newActiveThread]
            oldThreads.forEach( (chat, index) => {
                if (chat.id != newActiveThread.id){
                    revisedThreads.push(chat)
                }
            })
            revisedThreads.forEach( thread => {
                console.log(thread.chatroomName)
            })
            setUser({...user, chatrooms: revisedThreads})
            setChangesMade(true)
            navigation.navigate("message-thread")
            setModalVisible(false)
        })
    }

    const handleMutation = async (chatName) => {
        return driverCreateChat({
            variables: {
                guests: newGuests,
                chatroomName: chatName
            }
        })
    }
// -------------------------- Handlers ---------------------------

// ------------------------- UseEffects --------------------------

    useEffect (async () => {
        if (changesMade && !loading){
            setTimeout(() => {
                
            }, 500)
        }
    }, [activeThread])

// ------------------------- UseEffects --------------------------


    if (!loading && queryData){
        let allDrivers = [...queryData.driverGetDriversFromDsp.drivers]
        return (
            <View>
                <Banner />

                <View style={ContactStyles.header}>
                    <View style={ContactStyles.searchBar}>
                        <SearchBar setSearch={handleSetSearch} />
                    </View>
                </View>

                <View style={ContactStyles.scrollContainer}>
                    <ScrollView contentContainerStyle={ContactStyles.container}>
                        {renderRoster(filterBasedOffSearch(allDrivers))}
                    </ScrollView>
                </View>

                <View style={ContactStyles.footer}>
                    <TouchableOpacity onPress={() => handleDoneClick()} style={ContactStyles.doneTouchBounds}>  
                        <View style={ContactStyles.completeSelection}>
                            <Text style={ContactStyles.doneText}>Done</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Modal visible={modalVisible}  backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <View>
                        <NameChat handleSubmission={handleSubmission} setModalVisible={setModalVisible} />
                    </View>
                </Modal>

            </View>
        )
    }
    else{
        return(
            <Loading />
        )
    }
}
export default Contacts