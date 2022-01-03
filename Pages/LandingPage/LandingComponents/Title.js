import React from "react";
import { View, Image } from 'react-native'
import { LogoStyles } from "../../../Styles/LandingPageStyles";

const Title = () => {

    return (
        <View>
            <Image
                style={LogoStyles.logo}
                source={require('../../../assets/tom-logo-letters.png')}
                />
        </View>
    )
}

export default Title