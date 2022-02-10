import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { websiteState } from '../Recoil/atoms'
import { Appbar, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Pressable } from 'react-native';
import SomeDudesFace from '../assets/SomeDudesFace.jpeg'
import BannerDropdown from "./BannerComponents/BannerDropdown";
// import Bell from "./BannerComponents/Bell";
import BellDropdown from "./BannerComponents/BellComponents/BellDropdown";

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
      <BannerDropdown visible={visible} handleModal={handleModal} handleLoggedIn={handleLoggedIn}/>
      <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} />

      <View style={styles.topBar}></View>

        <Appbar style={styles.bottom}>
          <View style={styles.leftIcons}>

            <Appbar.BackAction 
              color="black"
              size={20}
              onPress={() => navigation.goBack()} 
            />

            <Appbar.Content 
              top={10}
              left={-15}
              title={website} 
              color='black'
              style={styles.title}
            />
          </View>
                  
          <View style={styles.centerIcon}>
          </View>

          <View style={styles.rightIcons}>

          <Appbar.Action
              color='black'
              style={styles.actionBarHome}
              icon="home-variant"
              onPress={() => navigation.navigate('home')}
            />

            {/* <Pressable onPress={() => handleNotifiedModal()}>
              <Bell styles={styles} />
            
            </Pressable> */}

            <Pressable onPress={() => handleModal()}>
              <Avatar.Image
                source={SomeDudesFace}
                size={32}
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
      height: 50,
      shadowOpacity: 0,
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#f9f9f9',
      display: 'flex',
    },

    leftIcons: {
      width: 245,
      flexDirection: 'row',
      color: 'black'
      // backgroundColor: "red"
    },

    rightIcons: {
      position: 'absolute',
      width: 110,
      marginLeft: 252,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      // backgroundColor: "green"
    },

    centerIcon: {
      position: 'absolute',
      width: 150,
      alignItems: 'center',
      backgroundColor: "yellow"
      // marginLeft: 120
    },

    centerText: {
      fontSize: 16,
      top: 14,
      fontWeight: "700",
      color: 'white'
    },

    actionBar: {
      position: 'relative',
      top: 0,
      color: 'silver', 
      left: -3
    },

    actionBarHome: {
      // position: 'relative',
      left: '2%',
      color: '#570de4' 
    },

    actionBarHome: {
      position: 'relative',
      top: 0,
      left: 7,
      color: '#570de4' 
    },

    topBar: {
      position: 'relative',
      top: 0,
      height: 20,
      backgroundColor: '#f9f9f9',
    },

    title: {
      top: '2%',
      color: 'black'
    },

    test: {
      height: 75,
      width: 75,
      backgroundColor: "red"
    }
  });