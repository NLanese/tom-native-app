import React from 'react';
import { useRecoilState } from 'recoil'
import { userState } from '../../Recoil/atoms'
import { View, Text} from 'react-native';
import { HomeStyles } from '../../Styles/HomeStyles';
import Title from './HomeComponents/Title'
import ButtonBox from './HomeComponents/ButtonBox';
import BannerComponent from '../../Global/Banner';

const Home = () => {
    const [user, setUser] = useRecoilState(userState);

    return (
        <View /* style={HomeStyles.container} */> 
            {/* <Title /> */}
            <BannerComponent />
            <ButtonBox />
        </View>
    )
}

export default Home