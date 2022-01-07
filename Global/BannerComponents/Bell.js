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

  console.log("\n\n\n\n\n===========================================================================")
    console.log("hit 1")
  // const [userData, setUserData] = useRecoilState(userState)
    console.log("hit 2")
    const [notifiedVisible, setNotifiedVisible] = useState(false) 
    console.log("hit 3")

    // const { loading, error, dataSetNotified, refetch } = useQuery(GETNOTIFIED)
    // const { loading2, error2, notifiedMessages, refetch2 } = useQuery(GETNOTIFIEDMESSAGES)
    
    let dataSetNotified = true
    console.log("hit 4")
    let notifiedMessages = [
      {
      "id": "1",
      "createdAt": "2022-01-06T18:18:32.591Z",
      "read": false,
      "content": "The quick brown fox swiftly jumped over the lazy dog",
      "from": "ERIK",
      "type": "message",
      "driverId": 1,
      "adminId": null,
      "driver": null,
      "admin": null
    },
    {
      "id": "2",
      "createdAt": "2022-01-06T18:26:46.255Z",
      "read": false,
      "content": "This should sent a Notifed Message",
      "from": "ERIK",
      "type": "message",
      "driverId": 1,
      "adminId": null,
      "driver": null,
      "admin": null
    },
    {
      "id": "3",
      "createdAt": "2022-01-06T18:36:02.654Z",
      "read": false,
      "content": "fuck it, whatever, message",
      "from": "ERIK",
      "type": "message",
      "driverId": 1,
      "adminId": null,
      "driver": null,
      "admin": null
    },
    {
      "id": "4",
      "createdAt": "2022-01-07T00:47:14.886Z",
      "read": false,
      "content": "Hey, did it work?",
      "from": "ERIK",
      "type": "message",
      "driverId": 1,
      "adminId": null,
      "driver": null,
      "admin": null
    }
  ]
    console.log("hit 5")

    const handleNotifiedModal = () => {
      setNotifiedVisible(!notifiedVisible)
    }

    console.log("hit 6")

    const removeNotification = () => [ 
      // setUserData(...userData, notified=false)
      dataSetNotified = false
    ]
    console.log("hit 7")

    // useEffect(() => {
    //   console.log("\nBell, Testing useEffect conditions")
    //   console.log(!loading && dataSetNotified && !loading2 && notifiedMessages)
    //   if (!loading && dataSetNotified && !loading2 && notifiedMessages) {
    //       console.log("\nBell, inside useeffect")
    //       console.log(dataSetNotified)
    //   }
    // }, [dataSetNotified, notifiedMessages])

    if ( dataSetNotified && notifiedMessages ){

      if (dataSetNotified){

        return (
          <View>
              <Appbar.Action
                color='red'
                style={styles.actionBar}
                icon="bell"
                onPress={() => {
                  removeNotification()
                  setNotifiedVisible(true)
                }}
              />
              <View>
                <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} notifiedMessages={notifiedMessages}/>
              </View>
          </View>
        )
      }
      else{
        return (
          <View>
              <Appbar.Action
                color='white'
                style={styles.actionBar}
                icon="bell"
                onPress={() => {
                  setNotifiedVisible(true)
                }}
              />
              <View>
              <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} notifiedMessages="None"/>
              </View>
          </View>
          
        );
      }
    } 
    else {
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