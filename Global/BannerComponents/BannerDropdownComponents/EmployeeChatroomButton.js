import React, { useState } from 'react';
import { View } from 'react-native'
import { Button } from 'react-native-paper';
import { DropdownStyles } from '../../../Styles/GlobalStyles';
import { useHistory } from 'react-router-native';

const EmployeeChatroomButton = ({ handleModal }) => {
    const [buttonLoading, setButtonLoading] = useState(false)
    let history = useHistory()

    const handleSubmit = async () => {
        await setButtonLoading(true)
        await history.push('/messages')
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
                    Breakroom
                </Button>
       </View> 
    );
}

export default EmployeeChatroomButton;