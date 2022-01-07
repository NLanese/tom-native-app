import React from "react";
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-paper';
import { DropdownStyles } from "../../../Styles/GlobalStyles";

const Notifiction = ({notifiction}) => {
    
    const renderReadIndicator = (read) => {
        if (!read){
            return(<Avatar.Icomn size={10} color='red'></Avatar.Icomn>)
        }
        else{
            return(<Avatar.Icomn size={10} color='grey'></Avatar.Icomn>)
        }
    }

    return(
        <View>
            <View>
                {renderReadIndicator(notifiction.read)}
            </View>
            <View>
                <Text>{notifiction.type} Notification</Text>
                <Text>From {notifiction.from}</Text>
            </View>
            <View>
                <Text>{notifiction.content}</Text>
            </View>
        </View>
    )
}

export default Notifiction