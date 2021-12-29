import React from "react";
import { View, Text } from 'react-native'
import AdminAndUserInformation from "./InformationComponents/AdminAndUserInformation";
import EditAccountInformationButton from "./ButtonBoxComponents/EditAccountInformationButton";
import ViewAccidentsButton from "./ButtonBoxComponents/ViewAccidentsButton";
import { useQuery } from "@apollo/client";
import { settings } from "../../../Styles/SettingStyles";

const AccountInformation = (props) => {

    const [userData, { loading: loading, error: error, data: data }] = useQuery(GET_USER_DATA);
    /* Going to be used to check for errors */
    useEffect(() => {
        if (!loading && data) {
            console.log(data)
        } else {
            console.log(error)
        }
    }, [dataS, errorS]);

    return (
        <View style={settings.container}>
            <View>
                <AdminAndUserInformation userData={userData}/>
            </View>
            <EditAccountInformationButton userData={userData}/>
            <ViewAccidentsButton userData={userData}/>
        </View>
    )
}

export default AccountInformation