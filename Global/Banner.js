import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useHistory } from 'react-router-native';
import { StyleSheet, View, Text } from 'react-native';
import { NavbarStyles } from '../Styles/NavBarStyles';

const BannerComponent = () => (
    <View>
        <View style={styles.topBar}></View>

        <Appbar style={styles.bottom}>
        <Text style={NavbarStyles.leftText} onPress={() => {
                history.push('/home');
            }}> Home </Text>

            <Text style={NavbarStyles.rightText} onPress={() => {
                history.goBack();
            }}> Go Back </Text>

            <Appbar.Action
                color='#d0c1d0'
                style={styles.actionBar}
                icon="archive"
                onPress={() => console.log('Pressed archive')}
                />
                <Appbar.Action color='#d0c1d0' style={styles.actionBar} icon="mail" onPress={() => console.log('Pressed mail')} />
                <Appbar.Action color='#d0c1d0' style={styles.actionBar} icon="label" onPress={() => console.log('Pressed label')} />
                <Appbar.Action
                    color='#d0c1d0'
                    style={styles.actionBar}
                    icon="delete"
                    onPress={() => console.log('Pressed delete')}
                />
        </Appbar>
    </View>
 );

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