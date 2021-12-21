import React from 'react';
import { useRecoilState } from 'recoil'
import { userState } from '../../Recoil/atoms'
import { View, Text} from 'react-native';
import { home } from '../../Styles/HomeStyles';
import Title from './HomeComponents/Title'
import ButtonBox from './HomeComponents/ButtonBox';

const Home = () => {
    const [user, setUser] = useRecoilState(userState);

    console.log(user)

    return (
        <View style={home.container}> 
            <Title />
            <ButtonBox />
        </View>
    )
}

export default Home