import React from 'react';
import { View } from 'react-native';
import { Input } from '@ui-kitten/components';
import { EmailStyles } from '../../../../Styles/LandingPageStyles';

const Password = ({ handleInput }) => {
    return (
        <View>
            <Input
                style={EmailStyles.input}
                size={'large'}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={password => {
                    handleInput('password', password)
                }}
            />
        </View>
    );
};

export default Password;