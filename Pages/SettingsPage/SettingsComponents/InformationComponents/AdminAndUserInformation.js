import React from "react";
import { View, Text } from 'react-native'
import { settings } from "../../../../Styles/SettingStyles";

const AdminAndUserInformation = ({userData}) => {

    return (
        <View styles={settings.container}>
            <View style={settings.personalInformation}>
                <Text style={settings.header}>Personal Information</Text>
                <Text style={settings.text}> Name: {`${userData.firstname} ${userData.lastname}`}</Text>
                <Text style={settings.text}> Phone Number: {`${userData.phoneNumber}`}</Text>
                <Text style={settings.text}> Email: {`${userData.email}`}</Text>
            </View>
            <View style={settings.employeeInformation}>
                <Text style={settings.text}> Employee ID: {`${userData.employeeId}`}</Text>
                <Text style={settings.text}> Administrator Name: {`${userData.adminFirstname} ${userData.adminLastname}`}</Text>
                <Text style={settings.text}> Administrator Email: {`${userData.adminEmail}`}</Text>
                <Text style={settings.text}> Administrator Status: {`${userData.adminAccountStanding}`}</Text>
            </View>
        </View>
    )
}

export default AdminAndUserInformation