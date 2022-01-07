import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { GETNOTIFIED } from "../../GraphQL/operations";
import { GETNOTIFIEDMESSAGES } from "../../GraphQL/operations";
import BellDropdown from "./BellComponents/BellDropdown";
import { useQuery } from "@apollo/client";
import { ActivityIndicator } from "react-native-paper";

const Bell = () => {
  const [notified, setNotified] = useState(false)
  const [notifiedMessages, setNotifiedMessages] = useState({})
  const [notifiedVisible, setNotifiedVisible] = useState(false) 
  const { loading, error, data, refetch } = useQuery(GETNOTIFIED)
  const { loading: loadingN, error: errorN, data: dataN, refetch: refetchN } = useQuery(GETNOTIFIEDMESSAGES)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRefresh(!refresh)
    }, 500)
  }, [])

  useEffect(() => {
      if (!loading && data) {
        setNotified(data.getDriver.notified)
      }
  }, [refresh])

  useEffect(() => {
    if(!loadingN && dataN) {
      setNotifiedMessages(dataN.getNotifiedMessages)
    }
  }, [refresh])

    
  //   const notifiedMessages = [
  //     {
  //     "id": "1",
  //     "createdAt": "2022-01-06T18:18:32.591Z",
  //     "read": false,
  //     "content": "The quick brown fox swiftly jumped over the lazy dog",
  //     "from": "ERIK",
  //     "type": "message",
  //     "driverId": 1,
  //     "adminId": null,
  //     "driver": null,
  //     "admin": null
  //   },
  //   {
  //     "id": "2",
  //     "createdAt": "2022-01-06T18:26:46.255Z",
  //     "read": false,
  //     "content": "This should sent a Notifed Message",
  //     "from": "ERIK",
  //     "type": "message",
  //     "driverId": 1,
  //     "adminId": null,
  //     "driver": null,
  //     "admin": null
  //   },
  //   {
  //     "id": "3",
  //     "createdAt": "2022-01-06T18:36:02.654Z",
  //     "read": false,
  //     "content": "fuck it, whatever, message",
  //     "from": "ERIK",
  //     "type": "message",
  //     "driverId": 1,
  //     "adminId": null,
  //     "driver": null,
  //     "admin": null
  //   },
  //   {
  //     "id": "4",
  //     "createdAt": "2022-01-07T00:47:14.886Z",
  //     "read": false,
  //     "content": "Hey, did it work?",
  //     "from": "ERIK",
  //     "type": "message",
  //     "driverId": 1,
  //     "adminId": null,
  //     "driver": null,
  //     "admin": null
  //   }
  // ]

  const handleNotifiedModal = () => {
    setNotifiedVisible(!notifiedVisible)
  }

  /* Add Mutation that changes notified in dataBase */
  const removeNotification = () => {
    setNotified(false)
  }

  if ( notifiedMessages[0] ){
    if (notified === true){
      return (
        <View>
          <Appbar.Action
            color='red'
            style={styles.actionBar}
            icon="bell"
            onPress={() => {
              setNotifiedVisible(true)
              removeNotification()
            }}
          />

          <View>
            <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} notifiedMessages={notifiedMessages}/>
          </View>

        </View>
      )
    }
    else if (notified === false) {
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
            <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} notifiedMessages={notifiedMessages}/>
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