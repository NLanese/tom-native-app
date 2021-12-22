import React, { useState } from "react";
import { View, Text, Switch } from 'react-native'
import { SubmitStyle } from "../../../../Styles/ReportAnAccidentStyles";


const SafetyFailedButton = ({ handleInput, safetyFailed }) => {
    const toggleSwitch = () => handleInput('safetyFailed', !safetyFailed);
  
    return (
      <View style={SubmitStyle.container}>
          <Text style={SubmitStyle.text}> Did your safety equipment fail? </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={safetyFailed ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={safetyFailed}
        />
      </View>
    );
}

export default SafetyFailedButton