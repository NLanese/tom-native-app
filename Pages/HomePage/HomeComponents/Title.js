import React from "react";
import { View, Image } from 'react-native'
import { HomeStyles } from "../../../Styles/HomeStyles";

const Title = () => {

    return (
        <View>
            <Image
                style={HomeStyles.logo}
                source={require('../../../assets/tom-logo-white-transparent.png')}
                />
        </View>
    )
}

export default Title