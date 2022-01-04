import React from "react";
import { useRecoilState } from "recoil";
import { websiteState } from '../Recoil/atoms'
import { Appbar, Avatar } from 'react-native-paper';
import { useHistory } from 'react-router-native';
import { StyleSheet, View, Text } from 'react-native';

const BannerComponent = () => {
  const [website] = useRecoilState(websiteState)
  let history = useHistory()

  return (
    <View>
      <View style={styles.topBar}></View>

        <Appbar style={styles.bottom}>
          <View style={styles.leftIcons}>
            <Appbar.Action
              color='#d0c1d0'
              style={styles.actionBar}
              icon="arrow-left-bold"
              onPress={() => history.goBack()}
            />

            <Appbar.Action
              color='#d0c1d0'
              style={styles.actionBar}
              icon="home"
              onPress={() => history.push('/home')}
            />
          </View>
                  
          <View style={styles.centerIcon}>
            <Text style={styles.centerText}>
              {website}
            </Text>
          </View>

          <View style={styles.rightIcons}>
            <Appbar.Action
              color='#d0c1d0'
              style={styles.actionBar}
              icon="alarm-light-outline"
            />

            <Avatar.Image size={24} source={require('../assets/tom-logo-white-transparent.png')} />
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
      backgroundColor: '#24296f',
      display: 'flex',
      // paddingBottom: 51
    },
    leftIcons: {
      // position: 'absolute',
      width: 150,
      flexDirection: 'row',
      // paddingBottom: 10
    },
    rightIcons: {
      position: 'absolute',
      width: 365,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    centerIcon: {
      position: 'absolute',
      width: 150,
      alignItems: 'center',
      marginLeft: 120
    },
    centerText: {
      // width: 100,
      fontSize: 24,
      fontWeight: "700"
    },
    actionBar: {
      position: 'relative',
      top: 0,
      color: '#d0c1d0' 
    },
    topBar: {
      position: 'relative',
      top: 0,
      height: 20,
      backgroundColor: '#9174a9',
      // paddingBottom: 20
    }
  });