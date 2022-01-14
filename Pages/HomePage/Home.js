import React, { useEffect } from 'react';
import { websiteState } from '../../Recoil/atoms';
import { useRecoilState } from 'recoil';
import { View } from 'react-native';
import ButtonBox from './HomeComponents/ButtonBox';
import { HomeStyles } from '../../Styles/HomeStyles';
import Banner from '../../Global/Banner';

const Home = ({ handleLoggedIn }) => {
    const [website, setWebsite] = useRecoilState(websiteState)

    useEffect(() => {
        setWebsite('Home')
    }, [])

    return (
        <View style={HomeStyles.container}> 
            <Banner handleLoggedIn={handleLoggedIn}/>
            <ButtonBox />
        </View>
    )
}

export default Home