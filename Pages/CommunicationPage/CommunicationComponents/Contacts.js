import React, {useState} from "react";
import { View, Text, ScrollView, TouchableOpacity, Touchable } from 'react-native'
import { useQuery } from "@apollo/client";
import { DRIVERSGETDRIVERSFROMDSP } from "../../../GraphQL/operations";
import Banner from "../../../Global/Banner";
import Loading from "../../../Global/Loading";
import SearchBar from "./SearchBar";
import { ContactStyles } from "../../../Styles/CommunicationStyles";
import nameObj from "../../../Hooks/handleNameCaseChange";
import dateObj from "../../../Hooks/handleDateTime";
import { useRecoilState } from 'recoil'
import { threadState, userState } from "../../../Recoil/atoms";

const Contacts = ({creating}) => {

    // Gets all Drivers from DSP
    const {loading: loading, error: error, data: queryData} = useQuery(DRIVERSGETDRIVERSFROMDSP)


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
                    {determineAddOrRemove(driver.id)}
                    <View style={ContactStyles.divider} />
                </View>
            )
        }))
    }

    const determineAddOrRemove = (selectedId) => {
        let returnComponent
        returnComponent = () => {
            return(
                <TouchableOpacity style={ContactStyles.addButton} onPress={() => handleAddClick(selectedId)}>
                    <View><Text style={ContactStyles.addText}>Add</Text></View>
                </TouchableOpacity>
            )
        }
        if (creating){
            if (newGuests.length > 0){
                newGuests.forEach( (driver) => {
                    if (driver === selectedId){
                        returnComponent = () => {
                            return(
                                <TouchableOpacity style={ContactStyles.removeButton} onPress={() => handleRemoveClick(selectedId)}>
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
                if (driver.id === selectedId){
                    returnComponent = () => {
                        return(
                            <TouchableOpacity style={ContactStyles.removeButton} onPress={() => handleRemoveClick(selectedId)}>
                                <View><Text style={ContactStyles.removeText}>Remove</Text></View>
                            </TouchableOpacity>
                        )
                    }
                }
            })
        }
        return returnComponent()
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
                <View style={ContactStyles.completeSelection}>
                    <Text style={ContactStyles.doneText}>Done</Text>
                </View>
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
export default Contacts