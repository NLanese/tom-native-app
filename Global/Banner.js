import React from "react";
import { useRecoilState } from "recoil";
import { websiteState } from '../Recoil/atoms'
import { Appbar, Avatar } from 'react-native-paper';
import { useHistory } from 'react-router-native';
import { StyleSheet, View, Text } from 'react-native';
import SomeDudesFace from '../assets/SomeDudesFace.jpeg'

const BannerComponent = () => {
  const [website] = useRecoilState(websiteState)
  let history = useHistory()

  return (
    <View>
      <View style={styles.topBar}></View>

        <Appbar style={styles.bottom}>
          <View style={styles.leftIcons}>

            <Appbar.BackAction 
              color="white"
              size={20}
              onPress={() => history.goBack()} 
            />

            <Appbar.Content 
              top={10}
              left={-15}
              title={website} 
              style={styles.title}
            />
          </View>
                  
          <View style={styles.centerIcon}>
          </View>

          <View style={styles.rightIcons}>

          <Appbar.Action
              color='white'
              style={styles.actionBarHome}
              icon="home-variant"
              onPress={() => history.push('/home')}
            />

            <Appbar.Action
              color='white'
              style={styles.actionBar}
              icon="bell"
            />

            <Avatar.Image
              source={SomeDudesFace}
              size={32}
            />
          </View>

        </Appbar>
    </View>
  )
}

export default BannerComponent

const styles = StyleSheet.create({
    bottom: {
      height: 50,
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#570de4',
      display: 'flex',
    },

    leftIcons: {
      width: 245,
      flexDirection: 'row',
      // backgroundColor: "red"
    },

    rightIcons: {
      position: 'absolute',
      width: 110,
      marginLeft: 262,
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
      color: '#570de4', 
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
      backgroundColor: '#570de4',
    },

    title: {
      top: '2%'
    },

    test: {
      height: 75,
      width: 75,
      backgroundColor: "red"
    }
  });