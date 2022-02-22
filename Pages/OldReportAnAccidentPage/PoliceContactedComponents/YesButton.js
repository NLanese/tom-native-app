import React from "react";
import { View, Text, Button } from 'react-native'
import { useHistory } from "react-router-native";

const YesButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => history.push('/please_remember')}
                title="Yes"
            />
        </View>
    )
}

export default YesButton