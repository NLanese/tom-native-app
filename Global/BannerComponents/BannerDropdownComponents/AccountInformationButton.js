import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { DropdownStyles } from '../../../Styles/GlobalStyles';
import { useHistory } from 'react-router-native';

const AccountInformationButton = ({ handleModal }) => {
    const [buttonLoading, setButtonLoading] = useState(false)
    let history = useHistory()

    const handleSubmit = async () => {
        await setButtonLoading(true)
        await history.push('/account_information')
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
                    My Profile
                </Button>
       </View> 
    );
}

export default AccountInformationButton;