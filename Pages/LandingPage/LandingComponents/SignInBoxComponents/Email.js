import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Input } from '@ui-kitten/components';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height


const Email = ({ handleInput }) => {

    const dynamicStyles = StyleSheet.create({
        activeInput: {
            backgroundColor: 'rgba(52, 52, 52, 0.2) !important',
            borderColor: 'white',
            width: maxWidth * 0.75,
            height: maxHeight * 0.1,
            marginLeft: maxWidth * 0.125,
        },
        inactiveInput: {
            backgroundColor: 'rgba(52, 52, 52, 0.2) !important',
            borderColor: 'rgba(52, 52, 52, 0.2) !important',
            width: maxWidth * 0.75,
            height: maxHeight * 0.1,
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
                textStyle={{color: determineStyle().color}}
                onChangeText={email => {
                    handleInput('email', email)
                }}
            />
        </View>
    );
};

export default Email;