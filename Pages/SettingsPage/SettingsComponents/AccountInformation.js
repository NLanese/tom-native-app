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

const AccountInformation = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERDATA)
    const [queryData, setQueryData] = useState({})
    const [userData, setUserData] = useRecoilState(userState)

    useEffect(() => {
        console.log('hit')
        refetch()
    }, [])

    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriver)
        }
    }, [data])

    useEffect(() => {
            setUserData(queryData)
    }, [queryData])

    console.log(data)
    console.log(loading)


    if (!queryData.firstname) {
        return (
            <View style={SettingsStyles.container}>
                <Text> LOADING!!</Text>
            </View>
        )
    } else {
        return (
            <View style={SettingsStyles.container}>    
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
}

export default AccountInformation