import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';

/* Query */
/* 2 returns here */
/* One for the red bell / One for normal bell */
/* if (notified) */
/* Create drop down for notification menu */
/* Last 3 notification */
/* onPress will take you to Notifiactions.js which will show all notificaiton of the pass */

const Bell = () => {
    return (
        <View>
            <Appbar.Action
              color='white'
              style={styles.actionBar}
              icon="bell"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    actionBar: {
      position: 'relative',
      top: 0,
      color: '#570de4', 
      left: -3
    },
  });

export default Bell;