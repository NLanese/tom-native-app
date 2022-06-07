import React, { useState } from "react";
import { View, Image } from "react-native";
import { Input } from "@ui-kitten/components";
import { ChatroomsStyles } from "../../../Styles/CommunicationStyles";

import glass from "../../../assets/magnifyGlass.png"


const SearchBar = ({setSearch}) => {

    const [inInput, setInInput] = useState(false)

    const determineSearchStyle = () => {
        if (inInput){
            return ChatroomsStyles.searchBarActive
        }
        else{
            return ChatroomsStyles.searchBarInactive
        }
    }

    const handleTextChange = (content) => {
        setSearch(content)
    }

    return(
        <View style={{marginLeft: -65}}>
            <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: 5, marginTop: 25, marginLeft: 42}}>
                    <Image source={glass} style={{height: 15, width: 15, marginLeft: 30}}/>
            </View>
            <Input 
                onPressIn={() =>setInInput(true)}
                onEndEditing={() => setInInput(false)}
                style={{...determineSearchStyle(), marginRight: 30}}
                textStyle={{fontFamily: 'GilroyMedium', paddingLeft: 20}}
                placeholder="Search Chatrooms/Contacts"
                placeholderTextColor={'#BBBBBB'}
                onChangeText={(content) => handleTextChange(content)}
            />
        </View>
    )
}
export default SearchBar