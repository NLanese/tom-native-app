import React from "react";
import { View, Text } from 'react-native'
import AdminAndUserInformation from "./InformationComponents/AdminAndUserInformation";
import EditAccountInformationButton from "./ButtonBoxComponents/EditAccountInformationButton";
import ViewAccidentsButton from "./ButtonBoxComponents/ViewAccidentsButton";
import { settings } from "../../../Styles/SettingStyles";
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'

const AccountInformation = () => {
   
    const [getUser, setUser] = useRecoilState(userState)
    console.log(getUser)

    return (
        <View style={settings.container}>
            <View>
                <AdminAndUserInformation userData={getUser}/>
            </View>
            <EditAccountInformationButton/>
            <ViewAccidentsButton userData={getUser}/>
        </View>
    )
}

export default AccountInformation