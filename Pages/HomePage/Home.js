import React, { useEffect, useState } from 'react';
import { Portal, Modal, Button, IconButton } from 'react-native-paper'
import { websiteState } from '../../Recoil/atoms';
import { useRecoilState } from 'recoil';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import ButtonBox from './HomeComponents/ButtonBox';
import { HomeStyles } from '../../Styles/HomeStyles';
import Banner from '../../Global/Banner';


let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const Home = ({ handleLoggedIn }) => {
    const [website, setWebsite] = useRecoilState(websiteState)

    const [acknowledged, setAcknowledged] = useState(false)
    const [modalVisible, setModalVisible] = useState(true)
    const [exitDisabled, setExitDisabled] = useState(true)

    const handleAcknowledge = () => {
        console.log("hit")
        setAcknowledged(true)
        setExitDisabled(false)
        // handle ReadAt Mutation
    }

    const renderCheck = () => {
        if (acknowledged){
            return <IconButton icon="check-bold" size={35} style={{left: maxWidth * -0.048, top: maxHeight * -0.027}}/>
        }
        else{
            return null
        }
    }

    useEffect(() => {
        setWebsite('Home')
    }, [])

    return (
        <View style={HomeStyles.container}> 
            {/* <Portal> */}
                <Banner handleLoggedIn={handleLoggedIn}/>
                <ButtonBox />
                <Modal visible={modalVisible} style={HomeStyles.weeklyNotificationModal}>
                    <View style={HomeStyles.notificationModalContent}>
                        <View style={HomeStyles.weeklyNotificationTitleSpace}>
                            <Text style={HomeStyles.weeklyNotificationTitle}>Weekly Report Message:</Text>
                        </View>
                        <View style={HomeStyles.weeklyNotificationMessage}>

                        </View>
                        <View style={HomeStyles.acknowledgeContainter}>
                            <Text>I Acknowledge this message</Text>
                                <TouchableOpacity onPress={() => {handleAcknowledge()}}>
                                    <View style={{width: 30, height: 30, borderWidth: 1, left: maxHeight * 0.29, top: maxHeight * -0.038}}>
                                            {renderCheck()}
                                    </View>
                                </TouchableOpacity>
                            <View style={{borderWidth: 0.3, top: maxHeight * -0.026}}>
                                <Button 
                                    onPress={() => setModalVisible(false)}
                                    mode='contained'
                                    disabled={exitDisabled}>
                                    Exit 
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            {/* </Portal> */}
        </View>
    )
}

export default Home