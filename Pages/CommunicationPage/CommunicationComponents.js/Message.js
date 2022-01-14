import React from "react";
import { StyleSheet } from 'react-native';
import { View, Text } from "react-native";


const Message = ({from, content, dateSent}) => {

    let styleTag = ""
    // let rightNow = Date.now()
    // dateSent = dateSent.toDateString()
    let month = dateSent.split("-")[1]
    let day = dateSent.split("-")[2].split("T")[0]
    let time = dateSent.split("-")[2].split("T")[1].split(".")[0]
    let hour = time.split(":")[0]
    let min = time.split(":")[1]
    let am_pm = "AM"
    hour = parseInt(hour, 10) - 5
    if (hour > 12){
        hour = hour - 12
        am_pm = "PM"
    }
    let fullTimeObj = (month + "-" + day + " " + hour + ":" + min + am_pm)
    if (from == "You"){
        styleTag = MessageStyles.yourMessages
        return(
            <View style={styleTag}>
                <View style={MessageStyles.container}>
                    <View>
                        <Text>{content}</Text>
                    </View>
                    <View>
                     <Text style={{color: 'grey'}}>{fullTimeObj}</Text>
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
                        <Text style={{color: 'grey'}}>{fullTimeObj}</Text>
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