import React from 'react';
import { View, Text } from 'react-native';
import { NavbarStyles } from '../Styles/NavBarStyles'
import { useHistory } from 'react-router-native';

const NavBar = () => {
    let history = useHistory();

    return (
        <View style={NavbarStyles.container}>
            <Text style={NavbarStyles.leftText} onPress={() => {
                history.push('/home');
            }}> Home </Text>

            <Text style={NavbarStyles.rightText} onPress={() => {
                history.goBack();
            }}> Go Back </Text>
        </View>
    );
};

export default NavBar;