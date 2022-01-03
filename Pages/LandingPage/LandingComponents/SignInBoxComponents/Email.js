import React from 'react';
import { Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { EmailStyles } from '../../../../Styles/LandingPageStyles'

const UserName = ({ handleInput }) => {
    return (
        <View style={EmailStyles.container}>
            <Text style={EmailStyles.text}> Email </Text>

            <Input
                style={EmailStyles.input}
                placeholderTextColor={'#CCCCCC'}
                placeholder='Please enter your Email Address!'
                inputContainerStyle={{borderBottomWidth: 0}}
                onChangeText={email => {
                    handleInput('email', email)
                }}
            />
        </View>
    );
};

export default UserName;