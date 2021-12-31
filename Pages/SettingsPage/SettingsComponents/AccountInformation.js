import React from "react";
import { View, Text } from 'react-native'
import AdminAndUserInformation from "./InformationComponents/AdminAndUserInformation";
import EditAccountInformationButton from "./ButtonBoxComponents/EditAccountInformationButton";
import ViewAccidentsButton from "./ButtonBoxComponents/ViewAccidentsButton";
import { SettingsStyles } from "../../../Styles/SettingStyles";
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'
import { AccountInformationStyles } from "../../../Styles/SettingStyles";

const AccountInformation = () => {
    const [getUser, setUser] = useRecoilState(userState)

    return (
        <View style={SettingsStyles.container}>

            <View style={AccountInformationStyles.container}>
                <AdminAndUserInformation userData={getUser}/>
            </View>
            
            <EditAccountInformationButton/>
            <ViewAccidentsButton userData={getUser}/>
        </View>
    )
}

export default AccountInformation