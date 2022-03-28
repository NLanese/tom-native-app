import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { userState } from '../../../Recoil/atoms';
import { useRecoilState } from 'recoil';
import { Button } from 'react-native-paper';
import { DropdownStyles } from '../../../Styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const SignOutButton = ({ handleModal, handleLoggedIn }) => {
    const [userData, setUserData] = useRecoilState(userState)
    const [buttonLoading, setButtonLoading] = useState(false)
    const navigation = useNavigation()

    const handleSubmit = async () => {
        await handleLoggedIn()
        await navigation.navigate("/")
        await handleModal()
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