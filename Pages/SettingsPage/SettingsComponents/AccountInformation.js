import React from "react";
import { View, Text } from 'react-native'
import AdminAndUserInformation from "./InformationComponents/AdminAndUserInformation";
import EditAccountInformationButton from "./ButtonBoxComponents/EditAccountInformationButton";
import ViewAccidentsButton from "./ButtonBoxComponents/ViewAccidentsButton";
import { settings } from "../../../Styles/SettingStyles";

const AccountInformation = (props) => {

    return (
        <View style={settings.container}>
            <AdminAndUserInformation />
            <EditAccountInformationButton />
            <ViewAccidentsButton />
        </View>
    )
}

export default AccountInformation