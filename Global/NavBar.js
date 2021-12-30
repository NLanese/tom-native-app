import React from 'react';
import { View, Text } from 'react-native';
import { navStyles } from '../Styles/NavBarStyles'
import { useHistory } from 'react-router-native';

const NavBar = () => {
    let history = useHistory();

    return (
        <View style={navStyles.container}>
            <Text style={navStyles.leftText} onPress={() => {
                history.push('/home');
            }}> Home </Text>

            <Text style={navStyles.rightText} onPress={() => {
                history.goBack();
            }}> Go Back </Text>
        </View>
    );
};

export default NavBar;