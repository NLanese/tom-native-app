import React from "react";
import { View, Text } from "react-native";

import Banner from "../../Global/Banner";

const NoShifts = () => {
    console.log("No Shifts")
    return( 
        <View>
            <Banner />
            <Text>There is currently no shift information for you today!</Text>
        </View>
    )
}

export default NoShifts