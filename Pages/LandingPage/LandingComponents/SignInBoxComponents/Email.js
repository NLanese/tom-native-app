import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Input } from '@ui-kitten/components';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height


const Email = ({ handleInput,IableToLogin }) => {

    const dynamicStyles = StyleSheet.create({
        activeInput: {
            backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 15,
            width: '85%',
            height: '100%',
            marginLeft: maxWidth * 0.125,
        },
        inactiveInput: {
            backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
            borderColor: 'rgba(52, 52, 52, 0.3) !important',
            borderRadius: 15,
            width: '85%',
            height: '100%',
            marginLeft: maxWidth * 0.125,
        }
    })

    const [isActive, setActive] = useState(false)

    const determineStyle = () => {
        if (isActive){
            return{
                style: dynamicStyles.activeInput,
                color: 'white'
            }
        }
        else{
            return{
                style: dynamicStyles.inactiveInput,
                color: '#adadad'
            }
        }
    }

    return (
        <View>
            <Input
                onPressIn={() => setActive(true)}
                onEndEditing={() => setActive(false)}
                style={determineStyle().style}
                size={'large'}
                placeholder='Email'
                placeholderTextColor={determineStyle().color}
                textStyle={{color: determineStyle().color, fontSize: 18}}
                onChangeText={email => {
                    handleInput('email', email)
                }}
            />
        </View>
    );
};

export default Email;