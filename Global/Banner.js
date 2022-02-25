import React, { useState } from "react";
import { StyleSheet, View, Pressable, Dimensions, Image, Text, TouchableWithoutFeedback, Modal } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import { useRecoilState } from "recoil";
import { websiteState } from '../Recoil/atoms'
import { threadState } from "../Recoil/atoms";

import ThreadDetails from "../Pages/CommunicationPage/CommunicationComponents/ThreadDetails";

import SomeDudesFace from '../assets/SomeDudesFace.jpeg'
import BannerDropdown from "./BannerComponents/BannerDropdown";
import Bell from "./BannerComponents/Bell";
import BellDropdown from "./BannerComponents/BellComponents/BellDropdown";
import arrowBack from '../assets/backArrowIcon.png'
import homeIcon from '../assets/homeIcon.png'

import { CommunicationStyles } from "../Styles/CommunicationStyles"

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const Banner = ({ handleLoggedIn, setActiveThread = null }) => {
  
  const [modalvisible, setModalVisible] = useState(false)
  const [visible, setVisible] = useState(false)
  const [notifiedVisible, setNotifiedVisible] = useState(false)

  const [website, setWebsiteState] = useRecoilState(websiteState)
  const [activeThread] = useRecoilState(threadState)
  const navigation = useNavigation()

  const handleModal = () => {
    setVisible(!visible)
  }

  const handleNotifiedModal = () => {
    setNotifiedVisible(!notifiedVisible)
  }

  const handleBackClick = () => {
    if (setActiveThread !== null){
      setActiveThread(null)
    }
    setWebsiteState({current: "Home", previous: website.current})
    navigation.navigate('home')
  }

const handleInfoClick = () => {
    setModalVisible(true)
}

  const handlePageDisplay = () => {
    if (website.current == "Message Thread"){
      return(
        <View>
            {/* INFORMATION MODAL */}
            <Modal visible={modalvisible}>
                {/* <ThreadDetails setModalVisible={setModalVisible} chatroom={activeThread} setActiveThread={setActiveThread} activeThread={activeThread}/> */}
            </Modal>

            {/* Chatroom Label */}
            <TouchableWithoutFeedback onPress={() => handleInfoClick()} style={{borderWidth: 2, borderColor: " red", position: 'absolute'}}>
                <View style={CommunicationStyles.threadLabel}>
                    <Text style={CommunicationStyles.labelText}>{activeThread.chatroomName.split(" chatroom")[0]}</Text>
                    <View>
                        <View style={{height: 35, width: 35, marginTop: 0, borderRadius: 100, backgroundColor: 'black'}}/>
                    </View>
                </View >
            </TouchableWithoutFeedback>
        </View>
      )
    }
    else{
      return (<Text style={styles.actualTitle}>{website.current}</Text>)
    }
  }

  return (
    <View>
      <View style={styles.topBar}></View>
      <BannerDropdown visible={visible} handleModal={handleModal} handleLoggedIn={handleLoggedIn}/>
      <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} />
        <Appbar style={styles.bottom}>

          <View style={styles.leftIcons}>

            <Pressable onPress={() => navigation.goBack()}>
              <Image source={arrowBack} style={{marginTop: 8, height: 20, width: 24}}/>
            </Pressable>

            <Pressable onPress={() => handleBackClick()}>
              <Image source={homeIcon} style={{marginTop: 8, marginLeft: 25, height: 20, width: 21}}/>
            </Pressable>

          </View>
                  
          <View style={styles.centerIcon}>

            <View style={styles.titleBox}>
              {handlePageDisplay()}
            </View>

          </View>

          <View style={styles.rightIcons}>
            
            <Pressable onPress={() => handleNotifiedModal()}>
              <Bell styles={styles} />
            </Pressable>

            <Pressable onPress={() => handleModal()}>

              <Avatar.Image
                style={{marginTop: 12}}
                source={SomeDudesFace}
                size={40}
              />

            </Pressable>
          </View>

        </Appbar>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    bottom: {
      alignContent: 'center',
      height: maxHeight * .110,
      marginTop: maxHeight * .026,
      shadowOpacity: 0,
      position: 'relative',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center'
    },
    topBar: {
      marginTop: '-%',
      position: 'absolute',
      width: '100%',
      height: maxHeight * .026,
      backgroundColor: 'white',
    },
//------------------------------------
    leftIcons: {
      marginLeft: '8%',
      height: '100%',
      width: '25%',
      position: 'absolute',
      flexDirection: 'row',
      color: 'black',
      // backgroundColor: "red",
      alignItems: 'center',
    },
    rightIcons: {
      height: '100%',
      position: 'absolute',
      width: '33%',
      marginLeft: '66%',
      marginRight: '8%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      // backgroundColor: "green"
    },
    centerIcon: {
      height: '80%',
      marginTop: 0,
      width: '33%',
      position: 'absolute',
      alignItems: 'center',
      // backgroundColor: "yellow",
      marginLeft: maxWidth * 0.322,
      paddingTop: '3%'
    },
//--------------------------------------------

    titleBox: {
      marginTop: 10,
      // backgroundColor: 'red',
      height: '100%'
    },
    title: {
      textAlign: 'center',
      fontFamily: 'GilroyMedium',
      letterSpacing: 1,
      color: '#444444',
      fontSize: 12,
      height: '100%',
    },
    actualTitle: {
      textAlign: 'center',
      fontFamily: 'GilroyMedium',
      letterSpacing: 1,
      color: '#444444',
      fontSize: 12,
      height: '100%',
      marginTop: 20
    },

  });