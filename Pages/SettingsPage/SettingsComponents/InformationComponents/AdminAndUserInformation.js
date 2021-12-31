import React from "react";
import { View, Text } from 'react-native'
import { AdminAndUserInformationStyles, SettingsStyles } from "../../../../Styles/SettingStyles";

const AdminAndUserInformation = ({userData}) => {

    return (
        <View styles={AdminAndUserInformationStyles.container}>
            <View style={AdminAndUserInformationStyles.personalInformation}>
                <Text style={AdminAndUserInformationStyles.header}>Personal Information</Text>
                <Text style={AdminAndUserInformationStyles.BigText}> Name: <Text style={AdminAndUserInformationStyles.text}>{`${userData.firstname} ${userData.lastname}`}</Text></Text>
                <Text style={AdminAndUserInformationStyles.BigText}> Phone Number: <Text style={AdminAndUserInformationStyles.text}>{`${userData.phoneNumber}`}</Text></Text>
                <Text style={AdminAndUserInformationStyles.BigText}> Email: <Text style={AdminAndUserInformationStyles.text}>{`${userData.email}`}</Text></Text>
            </View>
            <View style={AdminAndUserInformationStyles.employeeInformation}>
                <Text style={AdminAndUserInformationStyles.BigText}> Employee ID: <Text style={AdminAndUserInformationStyles.text}>{`${userData.employeeId}`}</Text></Text>
                <Text style={AdminAndUserInformationStyles.BigText}> Administrator Name: <Text style={AdminAndUserInformationStyles.text}>{`${userData.adminFirstname} ${userData.adminLastname}`}</Text></Text>
                <Text style={AdminAndUserInformationStyles.BigText}> Administrator Email: <Text style={AdminAndUserInformationStyles.text}>{`${userData.adminEmail}`}</Text></Text>
                <Text style={AdminAndUserInformationStyles.BigText}> Administrator Status: <Text style={AdminAndUserInformationStyles.text}>{`${userData.adminAccountStanding}`}</Text></Text>
            </View>
        </View>
    )
}

export default AdminAndUserInformation