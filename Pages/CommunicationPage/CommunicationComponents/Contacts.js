import React, {useState} from "react";
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
        const [thread, setThread] = useRecoilState(threadState)
    
    // UseState
        // keeps track of driver contacts added to groupchat
        const[newGuests, setNewGuests] = useState([])
        
        // Keeps track of contents in the search bar
        const [searchVal, setSearchVal] = useState("")

        //Triggers or cancels the Modal
        const [modalVisible, setModalVisible] = useState("")
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
            let newThread = thread.map((driver) =>{ return driver })
            newThread = [...newThread, newGuests]
            newThread.forEach( (driver) => {
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
    const handleAddClick = (selectedId) => {
        setNewGuests([...newGuests, selectedId])
        console.log(newGuests)
    }

    const handleRemoveClick = (selectedId) => {
        console.log(selectedId)
        let newestVersion = []
        newGuests.forEach( (guest) => {
            if (guest !== selectedId){
                newestVersion.push(guest)
            }
        })
        console.log(newestVersion)
        setNewGuests(newestVersion)
    }

    const handleSetSearch = (content) => {
        setSearchVal(content)
    }

    const handleDoneClick = () => {
        if (newGuests.length > 0){
            setModalVisible(true)
        }
    }

    const handleSubmission = async (chatName) => {
        if (user.role == "DRIVER"){
            await driverCreateChat({
                variables: {
                    guests: newGuests,
                    chatroomName: chatName
                }
            }).then( async(thread) => {
                await setThread(thread)
                await navigation.navigate("message-thread")
            })
        }
    }


// -------------------------- Handlers ---------------------------

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
                    <TouchableOpacity onPress={() => handleDoneClick()}>  
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