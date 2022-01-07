import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native'
import { useQuery } from "@apollo/client";
import { GETDRIVERMESSAGESWITHADMIN } from "../../GraphQL/operations";
import { ActivityIndicator } from "react-native-paper";

const Communication = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERMESSAGESWITHADMIN)
    const [refresh, setRefresh] = useState(false)
    const [messageData, setMessageData] = useState({})

    useEffect(() => {
        setTimeout(() => {
            setRefresh(!refresh)
        }, 500)
    }, [])
    
    useEffect(() => {
        if (!loading && data) {
            setMessageData(data.getMessageWithAdmin)
        }
    }, [refresh])

    console.log(messageData)
    


    if (messageData[0]) {
        return (
            <View>
                <Text> This is Communication page</Text>
            </View>
        )
    } else {
        return (
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
                <ActivityIndicator animating={true} size='large' color={'#570de4'} style={{padding: 3, marginRight: 8}}/>
            </View>
          )
    }
}

export default Communication