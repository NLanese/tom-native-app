import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Modal, Button, CheckBox } from '@ui-kitten/components';

import { useRecoilState } from 'recoil';
import { userState } from '../../Recoil/atoms';
import { websiteState } from '../../Recoil/atoms';

import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { DRIVERACKNOWLEDGEFEEDBACKMESSAGE } from '../../GraphQL/operations';

import ButtonBox from './HomeComponents/ButtonBox';
import { HomeStyles, ButtonBoxStyles } from '../../Styles/HomeStyles';
import NoData from './HomeComponents/NoData';
import EmployeeQuality from '../ScoreCardPage/ScoreCardComponents/InformationComponents/EmployeeQuality';
import Banner from '../../Global/Banner';
import nameObj from '../../Hooks/handleNameCaseChange'
import WeeklyBottomCard from './HomeComponents/weeklyModalBottom'
import NoStatsHomePage from "./HomeComponents/NoStatsHomePage"

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const Home = ({ handleLoggedIn }) => {
	const navigation = useNavigation()

    const [user, setUser] = useRecoilState(userState)

    let initVisible = false
    if (user.weeklyReport == [] || !user.weeklyReport || user.weeklyReport.length == 0){
        return <NoStatsHomePage handleLoggedIn={handleLoggedIn}/>
    }
    if (user && user.weeklyReport[user.weeklyReport.length - 1].feedbackMessageSent && !user.weeklyReport[user.weeklyReport.length - 1].acknowledged){
        initVisible = true
    }

    const [website, setWebsite] = useRecoilState(websiteState)

    const [acknowledged, setAcknowledged] = useState(false)
    const [modalVisible, setModalVisible] = useState(initVisible)
    const [exitDisabled, setExitDisabled] = useState(true)

    const [buttonLoading, setButtonLoading] = useState(false)
    const [buttonHeight, setButtonHeight] = useState(0)

    const [sendAcknowledge, { loading: loading, error: error, data: data }] =
		useMutation(DRIVERACKNOWLEDGEFEEDBACKMESSAGE);

    const handleAcknowledge = async (report) => {
        await setAcknowledged(true)
        await setExitDisabled(false)
        await setButtonLoading(true)
        // await sendAcknowledge({
        //     variables:{
        //         reportId: report.id
        //     }
        // })
    }

    const handleModalClose = () => {
        if (acknowledged){
            setModalVisible(false)
        }
    }


    const renderButton = () => {
        if (acknowledged){
            return(
                <View>
                    <View style={{position: 'absolute', height: (50 - buttonHeight), zIndex: 20, overflow: 'hidden',}}>
                        <Image source={require("../../assets/check-button-inactive.png")} style={{height: 50, width: 50}}/>
                    </View>
                    <Image source={require("../../assets/check-button.png")} style={{height: 50, width: 50}}/>
                </View>
            )
        }
        else{
            return(<Image source={require("../../assets/check-button-inactive.png")} style={{height: 50, width: 50}}/>)
        }
    }

    let weeklyReportObj
    let name
    if (user.weeklyReport){
        weeklyReportObj = user.weeklyReport[user.weeklyReport.length - 1]
        name = nameObj(user.firstname, user.lastname)
    }
    else{
        return <NoData />
    }
    


    if (buttonLoading){
        setTimeout(() => {
            if (buttonHeight < 50){
                setButtonHeight(buttonHeight + 5)
            }
            else{
                setButtonLoading(false)
            }
        }, 0.5)
    }

    return (
        <View>
            <Banner handleLoggedIn={handleLoggedIn}/>
            <ScrollView style={HomeStyles.container}> 
                    <View style={HomeStyles.titleBox}>
                        <Text style={HomeStyles.title}>Welcome</Text>
                    </View>
                    <View style={HomeStyles.subTitleBox}>
                        <Text style={HomeStyles.subTitle}>HI, {user.firstname}</Text>
                    </View>
                    
                    <ButtonBox user={user}/>

                    <TouchableOpacity 
                        onPress={() => {
                            setWebsite({current: "Personal Scorecard", previous: website.previous, saved: website.saved})
                            navigation.navigate("score_card")}
                         } 
                         style={ButtonBoxStyles.bottomTouch}> 
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

                    <View style={{marignTop: 20, height: 1, width: 1, backgroundColor: '#eaeaea'}}></View>


                    <Modal 
                        visible={modalVisible} 
                        style={HomeStyles.weeklyNotificationModal}
                        backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                    >
                        <View style={HomeStyles.notificationModalContent}>
                            <View style={HomeStyles.weeklyNotificationTitleSpace}>
                                <Text style={HomeStyles.weeklyNotificationTitle}>Weekly Status</Text>
                            </View>
                            <View style={HomeStyles.weeklyNotificationMessage}>
                                <Text style={HomeStyles.messageText}>{weeklyReportObj.feedbackMessage}</Text>
                            </View>
                            <View style={HomeStyles.acknowledgeContainter}>
                            
                                <CheckBox
                                    checked={acknowledged}
                                    onChange={() => handleAcknowledge()}>
                                </CheckBox>

                                <View style={HomeStyles.acknowledgedBox}>
                                    <Text style={HomeStyles.acknowledgedText}>I ACKNOWLEDGE</Text>
                                </View>

                                <View style={{width: 50, marginLeft: '80%', marginTop: -30}}>
                                    <TouchableOpacity onPress={() => handleModalClose()}>
                                        {renderButton()}     
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                        <View style={{position: 'absolute', marginTop: 240, marginLeft: 20, marginRight: 20, paddingLeft: 8, paddingRight: 8}}>
                            <WeeklyBottomCard data={user} />
                        </View>
                        
                    </Modal>
            </ScrollView>
        </View>
        )
}

export default Home