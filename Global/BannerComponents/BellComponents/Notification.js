import React from "react";
import { View, Text } from 'react-native'
import { Avatar, Icon } from 'react-native-paper';
import { DropdownStyles } from "../../../Styles/GlobalStyles";

const Notification = ({notification}) => {
    
    const renderReadIndicator = (read) => {
        // if (!read){
        //     return(
        //         <View>
        //             <Avatar.Icon size={10} color='red'></Avatar.Icon>)
        //         </View>
        //     )
        // }
        // else{
        //     return(
        //         <View>
        //             <Avatar.Icon size={10} color='red'></Avatar.Icon>)
        //         </View>
        //     )
        // }
    }

    return(
        <View>
            <View>
                {renderReadIndicator(notification.read)}
            </View>
            <View>
                <Text>{notification.type} Notification</Text>
                <Text>From {notification.from}</Text>
            </View>
            <View>
                <Text>{notification.content}</Text>
            </View>
        </View>
    )
}

export default Notification