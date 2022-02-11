import React, { useEffect, useState } from 'react';
import { userState } from '../../Recoil/atoms';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { DRIVERACKNOWLEDGEFEEDBACKMESSAGE } from '../../GraphQL/operations';
import { Modal, Button, IconButton } from 'react-native-paper'
import { websiteState } from '../../Recoil/atoms';
import { useRecoilState } from 'recoil';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import ButtonBox from './HomeComponents/ButtonBox';
import { HomeStyles, ButtonBoxStyles } from '../../Styles/HomeStyles';
import EmployeeQuality from '../ScoreCardPage/ScoreCardComponents/InformationComponents/EmployeeQuality';
import Banner from '../../Global/Banner';
import nameObj from '../../Hooks/handleNameCaseChange'


let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const Home = ({ handleLoggedIn }) => {
	const navigation = useNavigation()

    const [user, setUser] = useRecoilState(userState)

    let initVisible = false
    if (user && user.weeklyReport[user.weeklyReport.length - 1].feedbackMessageSent && !user.weeklyReport[user.weeklyReport.length - 1].acknowledged){
        initVisible = true
    }


    const [website, setWebsite] = useRecoilState(websiteState)
    const [acknowledged, setAcknowledged] = useState(false)
    const [modalVisible, setModalVisible] = useState(initVisible)
    const [exitDisabled, setExitDisabled] = useState(true)

    const [sendAcknowledge, { loading: loading, error: error, data: data }] =
		useMutation(DRIVERACKNOWLEDGEFEEDBACKMESSAGE);

    const handleAcknowledge = async (report) => {
        await setAcknowledged(true)
        await setExitDisabled(false)
        await sendAcknowledge({
            variables:{
                reportId: report.id
            }
        })
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

    let weeklyReportObj = user.weeklyReport[user.weeklyReport.length - 1]
    let name = nameObj(user.firstname, user.lastname)


    return (
            <ScrollView style={HomeStyles.container}> 
                {/* <Portal> */}
                    <Banner handleLoggedIn={handleLoggedIn}/>
                    <View style={HomeStyles.titleBox}>
                        <Text style={HomeStyles.title}>Welcome</Text>
                    </View>
                    <View style={HomeStyles.subTitleBox}>
                        <Text style={HomeStyles.subTitle}>Hi, {name.first}</Text>
                    </View>
                    
                    <ButtonBox user={user}/>

                    <TouchableOpacity onPress={() => navigation.navigate("score_card")} style={ButtonBoxStyles.bottomTouch}> 
                        <View > 
                            <View style={ButtonBoxStyles.scoreTitleBox}>
                                <Text style={ButtonBoxStyles.scoreTitle}>Scorecard</Text>
                            </View>
                            <View style={ButtonBoxStyles.scoreSubTitleBox}>
                                <Text style={ButtonBoxStyles.scoreSubTitle}>AND LEADERBOARD</Text>
                            </View>
                            <View style={ButtonBoxStyles.scorecard}>
                                <EmployeeQuality driverData={user} sortBy={"FICO"} rank={1} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Modal visible={modalVisible} style={HomeStyles.weeklyNotificationModal}>
                        <View style={HomeStyles.notificationModalContent}>
                            <View style={HomeStyles.weeklyNotificationTitleSpace}>
                                <Text style={HomeStyles.weeklyNotificationTitle}>Weekly Report Message:</Text>
                            </View>
                            <View style={HomeStyles.weeklyNotificationMessage}>
                                <Text>{weeklyReportObj.feedbackMessage}</Text>
                            </View>
                            <View style={HomeStyles.acknowledgeContainter}>
                                <Text>I Acknowledge this message</Text>
                                    <TouchableOpacity onPress={() => {handleAcknowledge(weeklyReportObj)}}>
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
            </ScrollView>
        )
}

export default Home