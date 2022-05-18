import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { userState, loggedState } from '../../../Recoil/atoms';
import { useRecoilState } from 'recoil';
import { Button } from 'react-native-paper';
import { DropdownStyles } from '../../../Styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignOutButton = ({ handleModal, handleLoggedIn }) => {

    const [logged, setLogged] = useRecoilState(loggedState)
    const [userData, setUserData] = useRecoilState(userState)
    const [buttonLoading, setButtonLoading] = useState(false)
    const navigation = useNavigation()

    const handleSubmit = () => {
        AsyncStorage.setItem('@email', "")
        AsyncStorage.setItem('@password', "")
        setLogged(false)
        navigation.navigate("/")
    }

    return (
       <View>
           <Button 
                // icon="login" 
                dark={false} 
                mode="outlined"
                loading={buttonLoading}
                style={DropdownStyles.accountInformationButton}
                labelStyle={DropdownStyles.accountInformationButtonText}
                onPress={() => handleSubmit()} 
            >
                Sign Out
            </Button>
       </View> 
    );
}

export default SignOutButton;