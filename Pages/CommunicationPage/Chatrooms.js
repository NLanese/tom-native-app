import React from "react";
import { View, Text } from "react-native";
import { Input, Icon } from "@ui-kitten/components";
import Banner from "../../Global/Banner";
import { ChatroomsStyles } from "../../Styles/CommunicationStyles";
import { useRecoilState } from "recoil";
import { userState } from "../../Recoil/atoms";

const Chatrooms = () => {

    // Recoil
    const [rawUser, setRawUser] = useRecoilState(userState)

    // Handles the user data
    let user
    if (rawUser.isArray){
        user = rawUser[0]
    }
    else{
        user = {...rawUser}
    }

    // TESTING
    console.log('\n\n\n\n\n\n\n\n\n')
    console.log(rawUser.chatrooms)
    // console.log(user)
    // TESING

    // Magnifying Glass Icon for Search Bar
    const magnifyGlassIcon = () => {
        return( 
            <Icon name={'search-outline'} />
        )
    }
    
    return(
        <View>
            <Banner />
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
        </View>
    )
}
export default Chatrooms