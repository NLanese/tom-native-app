import React from "react";
import { View, Text } from 'react-native'
import { AdminAndUserInformationStyles } from "../../../../Styles/SettingStyles";

const AdminAndUserInformation = ({userData}) => {

    return (
        <View styles={AdminAndUserInformationStyles.container}>
            <View style={AdminAndUserInformationStyles.personalInformation}>
                <Text style={AdminAndUserInformationStyles.header}>Personal Information</Text>
                <Text style={AdminAndUserInformationStyles.text}> Name: {`${userData.firstname} ${userData.lastname}`}</Text>
                <Text style={AdminAndUserInformationStyles.text}> Phone Number: {`${userData.phoneNumber}`}</Text>
                <Text style={AdminAndUserInformationStyles.text}> Email: {`${userData.email}`}</Text>
            </View>
            <View style={AdminAndUserInformationStyles.employeeInformation}>
                <Text style={AdminAndUserInformationStyles.text}> Employee ID: {`${userData.employeeId}`}</Text>
                <Text style={AdminAndUserInformationStyles.text}> Administrator Name: {`${userData.adminFirstname} ${userData.adminLastname}`}</Text>
                <Text style={AdminAndUserInformationStyles.text}> Administrator Email: {`${userData.adminEmail}`}</Text>
                <Text style={AdminAndUserInformationStyles.text}> Administrator Status: {`${userData.adminAccountStanding}`}</Text>
            </View>
        </View>
    )
}

export default AdminAndUserInformation