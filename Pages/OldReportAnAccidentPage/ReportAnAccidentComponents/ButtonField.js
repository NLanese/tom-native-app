import React from "react";
import { View, Text } from 'react-native'
import { ButtonFieldStyles } from "../../../Styles/ReportAnAccidentStyles";
import HitPersonButton from "./ButtonFieldComponents/HitPersonButton";
import PropertyAccidentButton from "./ButtonFieldComponents/PropertyAccidentButton";
import CollisionButton from "./ButtonFieldComponents/CollisionButton";
import InjuryReportButton from "./ButtonFieldComponents/InjuryReportButton";

const ButtonField = () => {

    return (
        <View style={ButtonFieldStyles.container}>
            <Text> What type of accident was it? </Text>
            <HitPersonButton />
            <PropertyAccidentButton />
            <CollisionButton />
            {/* <InjuryReportButton /> */}
        </View>
    )
}

export default ButtonField