import React, { useEffect } from 'react';
import { websiteState } from '../../Recoil/atoms';
import { useRecoilState } from 'recoil';
import { View } from 'react-native';
import ButtonBox from './HomeComponents/ButtonBox';

const Home = () => {
    const [website, setWebsite] = useRecoilState(websiteState)

    useEffect(() => {
        setWebsite('Home')
    }, [])

    return (
        <View> 
            <ButtonBox />
        </View>
    )
}

export default Home