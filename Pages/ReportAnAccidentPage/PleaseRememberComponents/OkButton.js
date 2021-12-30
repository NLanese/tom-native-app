import React from "react";
import { View, Text, Button } from 'react-native'
import { useHistory } from "react-router-native";

const OkButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => history.push('before_we_begin')}
                title='Ok'
            />
        </View>
    )
}

export default OkButton