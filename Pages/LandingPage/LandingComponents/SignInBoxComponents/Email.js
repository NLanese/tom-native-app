import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { EmailStyles } from '../../../../Styles/LandingPageStyles';

const UserName = ({ handleInput }) => {
    return (
        <View>
            <TextInput
                style={EmailStyles.input}
                selectionColor='black'
                activeOutlineColor='black'
                activeUnderlineColor='black'
                label='Email'
                onChangeText={email => {
                    handleInput('email', email)
                }}
            />
        </View>
    );
};

export default UserName;