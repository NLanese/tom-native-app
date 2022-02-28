import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native'
import { useQuery } from "@apollo/client";
import { GETDRIVERDATA } from "../../../GraphQL/operations";
import AdminAndUserInformation from "./InformationComponents/AdminAndUserInformation";
import EditAccountInformationButton from "./ButtonBoxComponents/EditAccountInformationButton";
import ViewAccidentsButton from "./ButtonBoxComponents/ViewAccidentsButton";
import { SettingsStyles } from "../../../Styles/SettingStyles";
import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'
import { AccountInformationStyles } from "../../../Styles/SettingStyles";
import { ActivityIndicator } from "react-native-paper";
import Banner from "../../../Global/Banner";

const AccountInformation = () => {
    // const { loading, error, data, refetch } = useQuery(GETDRIVERDATA)
    const [queryData, setQueryData] = useState({})
    const [userData, setUserData] = useRecoilState(userState)

    return (
        <View style={SettingsStyles.container}>
            <Banner />

            <View style={AccountInformationStyles.container}>
                <AdminAndUserInformation userData={userData}/>
            </View>
            <View style={AccountInformationStyles.buttonBox}>
                <EditAccountInformationButton/>
                <ViewAccidentsButton userData={userData}/>
            </View>
        </View>
    )
}

export default AccountInformation