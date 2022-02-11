import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { websiteState } from '../Recoil/atoms'
import { Appbar, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Pressable, Dimensions, Image, Text } from 'react-native';
import SomeDudesFace from '../assets/SomeDudesFace.jpeg'
import BannerDropdown from "./BannerComponents/BannerDropdown";
import Bell from "./BannerComponents/Bell";
import BellDropdown from "./BannerComponents/BellComponents/BellDropdown";
import arrowBack from '../assets/arrowBack.png'

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const Banner = ({ handleLoggedIn }) => {
  const [visible, setVisible] = useState(false)
  const [notifiedVisible, setNotifiedVisible] = useState(false)
  const [website] = useRecoilState(websiteState)
  const navigation = useNavigation()

  const handleModal = () => {
    setVisible(!visible)
  }

  const handleNotifiedModal = () => {
    setNotifiedVisible(!notifiedVisible)
  }

  return (
    <View>
      <View style={styles.topBar}></View>
      <BannerDropdown visible={visible} handleModal={handleModal} handleLoggedIn={handleLoggedIn}/>
      <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} />
        <Appbar style={styles.bottom}>

          <View style={styles.leftIcons}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={arrowBack} style={{ height: 30, width: 40}}/>
            </Pressable>
            
            <Appbar.Action
              color='black'
              style={styles.actionBarHome}
              icon="home-variant"
              onPress={() => navigation.navigate('home')}
            />
          </View>
                  
          <View style={styles.centerIcon}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{website}</Text>
            </View>
            {/* <Appbar.Content 
                style={{justifyContent: 'center', marginTop: '46.8%'}}
                title={website} 
                titleStyle={{fontFamily: 'GilroyMedium'}}
                color='black'
                style={styles.title}
            /> */}
          </View>

          <View style={styles.rightIcons}>
            {/* <Pressable onPress={() => handleNotifiedModal()}>
              <Bell styles={styles} />
            </Pressable> */}
            <Pressable onPress={() => handleModal()}>
              <Avatar.Image
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
      height: maxHeight * .100,
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
      height: '100%',
      width: '33%',
      position: 'absolute',
      alignItems: 'center',
      // backgroundColor: "yellow",
      marginLeft: maxWidth * 0.322,
      paddingTop: '3%'
    },
//--------------------------------------------

    titleBox: {
      marginTop: '15%',
      height: '20%'
    },
    title: {
      textAlign: 'center',
      fontFamily: 'GilroyMedium',
      color: '#444444',
      fontSize: 12,
      height: '100%',
    },

  });