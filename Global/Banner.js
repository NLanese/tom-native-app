import React, { useState } from "react";
import { StyleSheet, View, Pressable, Dimensions, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Modal } from "@ui-kitten/components";
import { Appbar, Avatar } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import { useRecoilState } from "recoil";
import { websiteState } from '../Recoil/atoms'
import { threadState, userState } from "../Recoil/atoms";

import ThreadDetails from "../Pages/CommunicationPage/CommunicationComponents/ThreadDetails";
import Gradient from "../Components/Gradient";

import SomeDudesFace from '../assets/SomeDudesFace.jpeg'
import BannerDropdown from "./BannerComponents/BannerDropdown";
import Bell from "./BannerComponents/Bell";
import BellDropdown from "./BannerComponents/BellComponents/BellDropdown";
import arrowBack from '../assets/backArrowIcon.png'
import homeIcon from '../assets/homeIcon.png'

import handlePicture from "../Hooks/handlePicture";

import { CommunicationStyles } from "../Styles/CommunicationStyles"
import Template from "../Styles/RAA/RAATemplateStyles"

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const Banner = ({ handleLoggedIn, setActiveThread = null }) => {
  
  const [modalvisible, setModalVisible] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)

  const [visible, setVisible] = useState(false)
  const [notifiedVisible, setNotifiedVisible] = useState(false)

  const [website, setWebsiteState] = useRecoilState(websiteState)
  const [user, setUser] = useRecoilState(userState)
  const [activeThread] = useRecoilState(threadState)
  const navigation = useNavigation()

  const handleModal = () => {
    setVisible(!visible)
  }

  const handleNotifiedModal = () => {
    setNotifiedVisible(!notifiedVisible)
  }

  const handleHomeClick = () => {
    if (setActiveThread !== null){
      setActiveThread(null)
    }
    let current = website.current
    if (
      current == "Police Notified" ||
      current == "Create An Accident" ||
      current == "Create Self Accident" ||
      current.includes("Accident") ||
      current.includes("Damage") ||
      current.includes("Property") ||
      current.includes("Collision") || 
      current == "Safety Equipment" ||
      current.includes("Injuries") ||
      current.includes("Injury")
      ){
        setModalVisible2(true)
      }
      else{
        setWebsiteState({current: "Home", previous: website.current, saved: website.saved})
        navigation.navigate('home')
      }
  }

  const handleBackClick = () => {
    if (website.previous == "Landing"){
      return null
    }
    if (website.previous == "Create Chatroom"){
      setWebsiteState({current: "Messaging", previous: website.current, saved: website.saved})
      navigation.navigate("messages")
    }
    else{
      setWebsiteState({current: website.previous, previous: website.current, saved: website.saved})
      navigation.goBack()
    }
  }

const handleInfoClick = () => {
    setModalVisible(true)
}

  const handlePageDisplay = () => {
    if (website.current == "Message Thread"){
      return(
        <View>
            {/* Chatroom Label */}
            <TouchableWithoutFeedback onPress={() => handleInfoClick()} style={{borderWidth: 2, borderColor: " red", position: 'absolute'}}>
                <View style={CommunicationStyles.threadLabel}>
                    <Text style={{...CommunicationStyles.labelText, marginTop: -5}}>{activeThread.chatroomName.split(" chatroom")[0]}</Text>
                    <View>
                        <View style={{height: 35, width: 35, marginTop: -5, borderRadius: 100, backgroundColor: 'black'}}/>
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
      <View style={styles.topBar}>
        {/* INFORMATION MODAL */}
        <Modal visible={modalvisible} style={{marginTop: -100, height: maxHeight - (maxHeight * .20)}}>
              <ThreadDetails setModalVisible={setModalVisible} chatroom={activeThread} setActiveThread={setActiveThread} activeThread={activeThread}/>
        </Modal>

      </View>
      {/* BANNER DROP */}
      <BannerDropdown visible={visible} handleModal={handleModal} handleLoggedIn={handleLoggedIn}/>

      {/* NOTIFICATION DROP */}
      <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} />

        <Appbar style={styles.bottom}>

          <View style={styles.leftIcons}>

            <Pressable onPress={() => handleBackClick()}>
              <Image source={arrowBack} style={{marginTop: 8, height: 20, width: 24}}/>
            </Pressable>

            <Pressable onPress={() => handleHomeClick()}>
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

            <View style={{marginTop: 20}}>
              {handlePicture(user.profilePick, 45)}
            </View>

            </Pressable>
          </View>

        </Appbar>

        {/* RAA Relocation Modal */}
        <Modal 
              animationType='slide' 
              transparent={true} 
              visible={modalVisible2}
              backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
              style={{
                  height: 300,
                  width: 300,
                  borderRadius: 10,
              }}
          >
              <View style={{ backgroundColor: "white", height: 255, width: 300,borderRadius: 10,}}>
                
                  <Text style={{...Template.questionText, textAlign: 'center', marginLeft: -8, marginBottom: 10, marginLeft: 20, width: 260}}>Go back to the homepage?</Text>
                
                  {/* OKAY or DISMISS */}
                  <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 30, width: 240 }}>

                      {/* OKAY BUTTON */}
                      <View style={{marginLeft: 4}}>
                        <TouchableOpacity onPress={() => {
                          setModalVisible2(false)
                          setWebsiteState({current: "Home", previous: website.current, saved: website.saved})
                          navigation.navigate('home')
                        }}>

                        <Gradient
                            colorOne={"#534FFF"}
                            colorTwo={"#15A1F1"}
                            style={{
                                height: 50,
                                width: 80,
                                borderRadius: 20,
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{fontSize: 12, textAlign: 'center', color: '#fff'}}>OK</Text>
                        </Gradient>

                        </TouchableOpacity>
                      </View>

                        {/* DISMISS BUTTON */}
                      <View style={{marginLeft: 70}}>
                          <TouchableOpacity onPress={() => setModalVisible2(false)}>
                            <Gradient
                                colorOne={"#DE0000"}
                                colorTwo={"#DE0000"}
                                style={{
                                    height: 50,
                                    width: 80,
                                    borderRadius: 20,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{fontSize: 12, textAlign: 'center', color: '#fff'}}>Dismiss</Text>
                            </Gradient>
                          </TouchableOpacity>
                      </View>

                  </View>

                  {/* CANCEL REPORT */}
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity 
                        onPress={() => {
                          setModalVisible2(false)
                          setWebsiteState({current: "Home", previous: "Home", saved: null})
                          navigation.navigate('home')
                        }}
                        style={{marginTop: 30}}
                        >
                          <Gradient
                              colorOne={"#232323"}
                              colorTwo={"#222222"}
                              style={{
                                  height: 50,
                                  width: 150,
                                  borderRadius: 20,
                                  justifyContent: 'center'
                              }}
                          >
                              <Text style={{fontSize: 12, textAlign: 'center', color: '#fff'}}>Cancel Report</Text>
                          </Gradient>
                        </TouchableOpacity>
                  </View>
              
              </View>

        </Modal>
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