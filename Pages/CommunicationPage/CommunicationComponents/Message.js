import React from "react";
import { StyleSheet } from 'react-native';
import { View, Text } from "react-native";
import Gradient from "../../../Components/Gradient";
import { Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height


const Message = ({from, content, dateSent, displayTime, displayName, displayIcon}) => {

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

    const determineTimeSent = () => {
        if (displayTime){
            return(
                <View style={{width: maxWidth, alignItems: 'center', marginLeft: -45}}>
                    <Text style={{color: '#BBB', textAlign: 'center', fontSize: 11, fontFamily: "GilroySemiBold"}}>{fullTimeObj}</Text>
                </View>
            )
        }
        else{
            return null
        }
    }

    const determineName = () => {
        if (displayName){
            return(
                <View style={{marginTop: 5, marginLeft: 15, marginBottom: 2}}>
                    <Text style={{fontFamily: "GilroySemiBold", fontSize: 11, color: "#BBB"}}>
                        {from.firstname} {from.lastname}
                    </Text>
                </View>
            )
        }
        else{
            return null
        }
    }

    const determineIcon = () => {
        if (displayIcon){
            return(
                <View style={{marginTop: -35}}>
                    <View style={{position: 'relative', height: 25, width: 25, borderRadius: 100, backgroundColor: "red"}} />
                </View>
            )
        }
        else{
            return null
        }
    }

    const determineWidth = () => {
        let width = (content.length * 6) + 75
        if (width > 250){
            width = 250
        }
        return width
    }

    if (from == "You"){
        styleTag = MessageStyles.yourMessages
        return(
            <View>
                {determineTimeSent()}
                <Gradient style={{
                    ...styleTag,
                    width: determineWidth(),
                    marginLeft: 345 - determineWidth()
                }}
                    colorTwo={"#DDD"}
                    colorOne={"#DDD"}
                >
                    <View>
                        <Text style={{paddingTop: 15, paddingBottom: 5, paddingRight: 20, paddingLeft: 15, textAlign: 'left', textAlignVertical: 'center', color: '#444'}}>{content}</Text>
                    </View>
                </Gradient>
            </View>
            
        )
    }


    else{
        styleTag = MessageStyles.adminMessages
        return(
            <View style={{marginLeft: 35, height: 'auto', paddingBottom: 2}}>
                {determineTimeSent()}
                {determineName()}
                <Gradient style={{
                    ...styleTag,
                    width: determineWidth(),
                }}
                    colorTwo={"#534FFF"}
                    colorOne={"#15A1F1"}
                >
                    <View>
                        <Text style={{paddingTop: 15, paddingBottom: 5, paddingRight: 15, paddingLeft: 20, textAlign: 'left', textAlignVertical: 'center', color: '#EEE'}}>{content}</Text>
                    </View>
                </Gradient>
                <View style={{position: 'relative', marginLeft: -30, justifyContent: 'flex-end'}}>
                    {determineIcon()}
                </View>
            </View>
            
        )
    }
}

export default Message

const MessageStyles = StyleSheet.create({
    yourMessages: {
        alignItems: 'flex-end',
        borderRadius: 15,
        marginBottom: 10
    },
    
    adminMessages: {
        borderRadius: 15,
        marginBottom: 10
    },

    container:{
        margin: 5
    }
})