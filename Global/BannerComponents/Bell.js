import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image, Pressable } from 'react-native';
import { Appbar } from 'react-native-paper';
import { GETNOTIFIED } from "../../GraphQL/operations";
import { GETNOTIFIEDMESSAGES } from "../../GraphQL/operations";
import BellDropdown from "./BellComponents/BellDropdown";
import { useQuery } from "@apollo/client";
import { ActivityIndicator } from "react-native-paper";
import bellIcon from "../../assets/bellIcon.png"


let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const Bell = () => {
  const [notified, setNotified] = useState(false)
  const [notifiedMessages, setNotifiedMessages] = useState({})
  const [notifiedVisible, setNotifiedVisible] = useState(false) 
//   const { loading, error, data, refetch } = useQuery(GETNOTIFIED)
//   const { loading: loadingN, error: errorN, data: dataN, refetch: refetchN } = useQuery(GETNOTIFIEDMESSAGES)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRefresh(!refresh)
    }, 500)
  }, [])

  // useEffect(() => {
  //     if (!loading && data) {
  //       setNotified(data.getDriver.notified)
  //     }
  // }, [refresh])

  // useEffect(() => {
  //   if(!loadingN && dataN) {
  //     setNotifiedMessages(dataN.getNotifiedMessages)
  //   }
  // }, [refresh])

  const handleNotifiedModal = () => {
    setNotifiedVisible(!notifiedVisible)
  }

  /* Add Mutation that changes notified in dataBase */
  const removeNotification = () => {
    setNotified(false)
  }

  // if ( !loading && !error && data ){
    // if (notified === true){
      return (
        <View>

          <Pressable 
          style={{marginTop: 8, marginLeft: -60}}
          onPress={() => {
            setNotifiedVisible(true)
            removeNotification()
          }}
          >
            <Image source={bellIcon} style={{marginTop: 14, marginLeft: 25, height: 20, width: 20}}/>
          </Pressable>

          <View style={{
              backgroundColor: 'magenta',
              color: 'red',
              marginLeft: -26.5,
              top: maxHeight * 0.005,
              left: -2,
              height: 7,
              width: 7,
              borderRadius: 100
          }}>
          </View>

          <View>
            <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} notifiedMessages={notifiedMessages}/>
          </View>

        </View>
      )
    // }
//     else if (notified === false) {
//       return (
//         <View>
//           <Appbar.Action
//             color='black'
//             style={styles.actionBar}
//             icon="bell"
//             onPress={() => {
//               setNotifiedVisible(true)
//             }}
//           />
            
//           <View>
//             <BellDropdown notifiedVisible={notifiedVisible} handleNotifiedModal={handleNotifiedModal} notifiedMessages={notifiedMessages}/>
//           </View>
//         </View> 
//       );
//     }
//   } 
//   else {
//       return (
//         <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
//             <ActivityIndicator animating={true} size={24} color={'white'} style={{padding: 3, marginRight: 8}}/>
//         </View>
//       )
//   }
}

const styles = StyleSheet.create({
  actionBarNoti: {
    position: 'relative',
    top: maxHeight * 0.009,
    color: '#570de4', 
    left: -3
  },
  actionBar: {
    position: 'relative',
    top: 0,
    color: '#570de4', 
    left: -3
  },
});

export default Bell;