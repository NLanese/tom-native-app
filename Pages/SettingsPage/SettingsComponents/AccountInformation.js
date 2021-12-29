import React from "react";
import { View, Text } from 'react-native'
import AdminAndUserInformation from "./InformationComponents/AdminAndUserInformation";
import EditAccountInformationButton from "./ButtonBoxComponents/EditAccountInformationButton";

const AccountInformation = (props) => {

    return (
        <View>
            <AdminAndUserInformation />
            <EditAccountInformationButton />
        </View>
    )
}

export default AccountInformation