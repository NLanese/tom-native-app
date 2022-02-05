import React from 'react';
import { View } from 'react-native';
import { Input } from '@ui-kitten/components';
import { EmailStyles } from '../../../../Styles/LandingPageStyles';

const Email = ({ handleInput }) => {
    return (
        <View>
            <Input
                style={EmailStyles.input}
                size={'large'}
                placeholder='Email'
                onChangeText={email => {
                    handleInput('email', email)
                }}
            />
        </View>
    );
};

export default Email;