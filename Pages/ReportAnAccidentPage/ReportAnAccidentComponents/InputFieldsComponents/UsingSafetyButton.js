import React, { useState } from "react";
import { View, Text, Switch } from 'react-native'
import { SubmitStyle } from "../../../../Styles/ReportAnAccidentStyles";


const UsingSafetyButton = ({ handleInput, usingSafety }) => {
    const toggleSwitch = () => handleInput('usingSafety', !usingSafety);
  
    return (
      <View style={SubmitStyle.container}>
          <Text style={SubmitStyle.text}> Were you following the proper safety protocals? </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={usingSafety ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={usingSafety}
        />
      </View>
    );
}

export default UsingSafetyButton