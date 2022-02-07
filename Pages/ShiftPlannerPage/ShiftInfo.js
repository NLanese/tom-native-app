import React from "react";
import { View, Text } from 'react-native'


const ShiftInfo = ({name, value}) => {

    return(
        <View>
            <View>
                <Text>{name}</Text>
            </View>
            <View>
                <Text>{value}</Text>
            </View>
        </View>
    )
}
export default ShiftInfo