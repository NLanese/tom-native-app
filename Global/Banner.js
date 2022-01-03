import React from "react";
import { Appbar, Avatar } from 'react-native-paper';
import { useHistory } from 'react-router-native';
import { StyleSheet, View } from 'react-native';

const BannerComponent = () => {
    let history = useHistory()

    return (
        <View>
            <View style={styles.topBar}></View>

            <Appbar style={styles.bottom}>
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

                  <Avatar.Image size={24} source={require('../assets/tom-logo-white-transparent.png')} />
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
      backgroundColor: '#24296f'
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
      backgroundColor: '#9174a9'
    }
  });