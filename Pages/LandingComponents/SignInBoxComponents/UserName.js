import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { userNameStyles } from '../../../Styles/LandingPageStyles'

const UserName = ({ handleInput }) => {
    return (
        <View style={userNameStyles.container}>
            <Text> Username </Text>
            <TextInput name='Username' style={userNameStyles.input} onChangeText={username => {
                handleInput('username', username);
            }}/>
        </View>
    );
};

export default UserName;