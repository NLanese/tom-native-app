import React from 'react';
import { View, Text} from 'react-native';
import { home } from '../../Styles/HomeStyles';

const Home = () => {

    return (
        <View style={home.container}> 
            <Text style={home.text}> Youve Signed In!</Text>
        </View>
    )
}

export default Home