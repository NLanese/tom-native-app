import React from "react";
import { StyleSheet } from 'react-native';
import { View, Text } from "react-native";


const Message = ({from, content, dateSent}) => {

    let styleTag = ""
    if (from == "You"){
        styleTag = MessageStyles.yourMessages
        return(
            <View style={styleTag}>
                <View style={MessageStyles.container}>
                    <View>
                        <Text>{content}</Text>
                    </View>
                    <View>
                        <Text>{dateSent}</Text>
                    </View>
                </View>
            </View>
        )
    }
    else{
        styleTag = MessageStyles.adminMessages
        return(
            <View style={styleTag}>
                <View style={MessageStyles.container}>
                    <View>
                        <Text>{content}</Text>
                    </View>
                    <View>
                        <Text>{dateSent}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Message

const MessageStyles = StyleSheet.create({
    yourMessages: {
        borderWidth: .3,
        borderRadius: 20,
        marginLeft: 35,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#d6c0ea',
        borderColor: "#d6c0ea",
    },
    
    adminMessages: {
        borderWidth: .3,
        borderRadius: 20,
        marginRight: 35,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#E2E8F1",
        borderColor: "#E2E8F1",
    },

    container:{
        margin: 5
    }
})