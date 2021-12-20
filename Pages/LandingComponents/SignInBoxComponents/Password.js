import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { userNameStyles } from '../../../Styles/LandingPageStyles';

const Password = ({ handleInput }) => {
    return (
        <View style={userNameStyles.container}>
            <Text> Password </Text>
            <TextInput style={userNameStyles.input} onChangeText={password => {
                handleInput('password', password);
            }}/>
        </View>
    );
};

export default Password;