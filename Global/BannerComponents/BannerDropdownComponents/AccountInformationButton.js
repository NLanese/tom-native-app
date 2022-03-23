import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { DropdownStyles } from '../../../Styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

import { useRecoilState } from 'recoil';
import { websiteState } from '../../../Recoil/atoms';


const AccountInformationButton = ({ handleModal }) => {
    const [buttonLoading, setButtonLoading] = useState(false)
    const [website, setWebsite] = useRecoilState(websiteState)
    const navigation = useNavigation()

    const handleSubmit = async () => {
        await setButtonLoading(true)
        await setWebsite({current: "Account Information", previous: website.current, saved: website.saved})
        await navigation.navigate('account_information')
        await handleModal()
    }



    let color = "white"
    if (website.current == "Account Information"){
        color = "#888"
    }

    return (
       <View>
           <Button 
					// icon="login" 
					dark={false} 
				    mode="outlined"
					loading={buttonLoading}
                    style={{...DropdownStyles.accountInformationButton, backgroundColor: color}}
                    labelStyle={DropdownStyles.accountInformationButtonText}
                    onPress={() => handleSubmit()} 
                >
                    My Profile
                </Button>
       </View> 
    );
}

export default AccountInformationButton;