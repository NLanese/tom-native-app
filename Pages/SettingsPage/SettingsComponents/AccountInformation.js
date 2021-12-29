import React from "react";
import { View, Text } from 'react-native'
import AdminAndUserInformation from "./InformationComponents/AdminAndUserInformation";
import EditAccountInformationButton from "./ButtonBoxComponents/EditAccountInformationButton";
import ViewAccidentsButton from "./ButtonBoxComponents/ViewAccidentsButton";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { settings } from "../../../Styles/SettingStyles";
import { GET_USER_DATA } from '../../../GraphQL/operations'
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
            <EditAccountInformationButton userData={getUser}/>
            <ViewAccidentsButton userData={getUser}/>
        </View>
    )
}

export default AccountInformation