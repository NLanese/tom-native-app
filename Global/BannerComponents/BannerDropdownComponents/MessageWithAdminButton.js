import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { DropdownStyles } from '../../../Styles/GlobalStyles';
import { useHistory } from 'react-router-native';

const MessageWithAdminButton = ({ handleModal }) => {
    const [buttonLoading, setButtonLoading] = useState(false)
    let history = useHistory()

    const handleSubmit = async () => {
        await setButtonLoading(true)
        await history.push('/admin_messages')
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
                    Boss Talk
                </Button>
       </View> 
    );
}

export default MessageWithAdminButton;