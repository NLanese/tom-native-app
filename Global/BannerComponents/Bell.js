import React, { useState, useEffect } from "react";
import { useRecoilState } from 'recoil'
import { userState } from '../../Recoil/atoms';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { GETNOTIFIED } from "../../GraphQL/operations";
import { GETNOTIFIEDMESSAGES } from "../../GraphQL/operations";
import BellDropdown from "./BellComponents/BellDropdown";
import { useQuery } from "@apollo/client";
import { ActivityIndicator } from "react-native-paper";

/* 2 returns here */
/* One for the red bell / One for normal bell */
/* if (notified) */
/* Create drop down for notification menu */
/* Last 3 notification */
/* onPress will take you to Notifiactions.js which will show all notificaiton of the pass */

const Bell = () => {
  console.log("===========================================================================")
  const [userData, setUserData] = useRecoilState(userState)
  const { loading, error, dataSetNotified, refetch } = useQuery(GETNOTIFIED)
  const { loading2, error2, notifiedMessages, refetch2 } = useQuery(GETNOTIFIEDMESSAGES)
  const [notifiedVisible, setNotifiedVisible] = useState(false) 

  const handleNotifiedModal = () => {
    setNotifiedVisible(!notifiedVisible)
  }

  const removeNotification = () => [ 
    setUserData(...userData, notified=false)
  ]

  useEffect(() => {
    console.log("\nBell, Testing useEffect conditions")
    console.log(!loading && dataSetNotified && !loading2 && notifiedMessages)
    if (!loading && dataSetNotified && !loading2 && notifiedMessages) {
        console.log("\nBell, inside useeffect")
        console.log(dataSetNotified)
    }
  }, [dataSetNotified, notifiedMessages])

  if ( dataSetNotified && notifiedMessages ){

    console.log("\n Bell.js line 46/47")
    console.log(dataSetNotified)
    console.log(notifiedMessages)

    if (notifiedData){

      console.log("\nBell.js line 52/53")
      console.log("Printing the notifiedMessages")
      console.log(notifiedMessages)

      return (
        <View>
            <Appbar.Action
              color='red'
              style={styles.actionBar}
              icon="bell"
              onPress={() => {
                removeNotification()
                setNotifiedVisible(true)}
              }
            />
            <View>
              <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} notifiedMessages={notifiedMessages}/>
            </View>
        </View>
      );
    }
    else{
      console.log("\nBell.js line 82")
      console.log("No New Notifications")
      return (
        <View>
            <Appbar.Action
              color='white'
              style={styles.actionBar}
              icon="bell"
              onPress={() => {
                setNotifiedVisible(true)}
              }
            />
            <View>
            <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} notifiedMessages="None"/>
            </View>
        </View>
        
      );
    }
  } 
  else {
    console.log("loading")
      return (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
            <ActivityIndicator animating={true} size={24} color={'white'} style={{padding: 3, marginRight: 8}}/>
        </View>
      )
  }
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