import React from "react";
import { View } from "react-native";

import Gradient from "../../../../Components/Gradient";

const noButton = () => {
    return(
        <View>
            <Gradient colorOne="#800000" colorTwo="#C00000" style={{width: 80, height: 80}}>
                <Text>No</Text>
            </Gradient>
        </View>
    )
}

export default noButton