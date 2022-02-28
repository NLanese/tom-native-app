import React, { useState } from "react";
import { View, Image } from "react-native";
import { Input } from "@ui-kitten/components";
import { ChatroomsStyles } from "../../../Styles/CommunicationStyles";

import glass from "../../../assets/magnifyGlass.png"


const SearchBar = ({setSearch}) => {

    const [inInput, setInInput] = useState(false)

    const determineSearchStyle = () => {
        if (inInput){
            console.log("active")
            return ChatroomsStyles.searchBarActive
        }
        else{
            console.log("Inactive")
            return ChatroomsStyles.searchBarInactive
        }
    }

    return(
        <View style={{marginLeft: -30}}>
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
    )
}
export default SearchBar