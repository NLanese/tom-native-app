import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { EmailStyles } from '../../../../Styles/LandingPageStyles';

const Password = ({ handleInput }) => {
    return (
        <View>
            <TextInput
                style={EmailStyles.input}
                selectionColor='black'
                activeOutlineColor='black'
                activeUnderlineColor='black'
                label='Password'
                onChangeText={password => {
                    handleInput('password', password)
                }}
            />
        </View>
    );
};

export default Password;