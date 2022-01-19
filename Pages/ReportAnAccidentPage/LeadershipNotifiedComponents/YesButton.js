import React from "react";
import { View, Text, Button } from 'react-native'
import { useHistory } from "react-router-native";

const YesButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                // onPress={() => history.push('/police_contacted')}
                title="Yes"
            />
        </View>
    )
}

export default YesButton