import React from 'react';
import { Text, View } from 'react-native';
import { Input } from 'react-native-elements';

import { EmailStyles } from '../../../../Styles/LandingPageStyles';

const Password = ({ handleInput }) => {
    return (
        <View style={EmailStyles.container}>
            <Text style={EmailStyles.text}> Password </Text>

            <Input
                style={EmailStyles.input}
                placeholderTextColor={'#CCCCCC'}
                placeholder='Please enter your Password!'
                inputContainerStyle={{borderBottomWidth: 0}}
                onChangeText={password => {
                    handleInput('password', password)
                }}
                secureTextEntry={true}
            />
        </View>
    );
};

export default Password;