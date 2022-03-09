import react, {useEffect, useState} from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native'

import { useRecoilState } from "recoil";

import { useQuery } from "@apollo/client";
import { DRIVERSGETSHIFTPLANNER } from "../../GraphQL/operations";
import { userState } from "../../Recoil/atoms";

import Banner from '../../Global/Banner'
import { ShiftPlannerStyles } from "../../Styles/ShiftPlannerStyles";

import dateObj from "../../Hooks/handleDateTime";
import numberToMonth from "./numberToMonth";
import numberToDay from "./numberToDay";

import ShiftInfo from "../ScrappedPages/ShiftInfo";
import Loading from "../../Global/Loading";
import NoShifts from "./NoShifts";
import Gradient from "../../Components/Gradient";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ShiftPlanner = () => {
 //-------------------------------------------------------------//
 //                                                             //
 //                  PRELIMINARY STATES                         //
 //                                                             //
 //-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-//

    // Dimensions
    let maxWidth= Dimensions.get('window').width
    let maxHeight= Dimensions.get('window').height

    // Recoil
    const [rawUser, setRawUser] = useRecoilState(userState)

    // Handles the user data
    // let user
    // if (rawUser.isArray){
    //     user = rawUser[0]
    // }
    // else{
    //     user = {...rawUser}
    // }

    let user = {
        firstname: "Jared",
        lastname: "Seaman",
        shiftPlanners: [
            {
                id: 12345,
                createdAt: "2022-02-26T15:48:08",
                sundayDate: "02/27/2022",
                sundayHours: "9am-5pm",
                mondayDate: "02/28/2022",
                mondayHours: "9am-5pm",
                tuesdayDate: "03/01/2022",
                tuesdayHours: "9am-5pm",
                wednesdayDate: "03/02/2022",
                wednesdayHours: "9am-5pm",
                thursdayDate: "03/03/2022",
                thursdayHours: "9am-5pm",
                fridayDate: "03/04/2022",
                fridayHours: "9am-5pm",   
                saturdayDate: "03/05/2022",
                saturdayHours: "9am-5pm",
                phoneId: "1234",
                deviceId: "5678",
                vehicleId: "9012",
                cxNumber: "42069",
                message: "Yoooo this is a message, I love me some messages. Aren't messages great? I message, you message, he she me, message. Message, messaging, it's first grade spongebob!",
                driver: "no"
            }
        ]
    }


// -------------------------------------------------------------//
//                                                              //
//                          GUARDS                              //
//                                                              //
//-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v//

    if (user.shiftPlanners === null){
        return(<NoShifts />)
    }
    else if (user.shiftPlanners.length < 1){
        return(<NoShifts />)
    }




 //-------------------------------------------------------------//
 //                                                             //
 //                DATE HANDLER AND DATE STATE                  //
 //                                                             //
 //-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-//

    // Gets current index
    let currentSP = user.shiftPlanners.length - 1

    // Puts all the shift data into an array of objects for easier sorting
    let thisWeeksShift = [
        {date: user.shiftPlanners[currentSP].sundayDate, hours: "9:30 AM-5:30 PM",},
        {date: user.shiftPlanners[currentSP].mondayDate, hours: "9:00 AM - 5:00 PM",},
        {date: user.shiftPlanners[currentSP].tuesdayDate, hours: "10:30 AM - 8:00 PM",},
        {date: user.shiftPlanners[currentSP].wednesdayDate, hours: "9:30 AM - 5:45 PM",},
        {date: user.shiftPlanners[currentSP].thursdayDate, hours: "Off",},
        {date: user.shiftPlanners[currentSP].fridayDate, hours: "Off",},
        {date: user.shiftPlanners[currentSP].saturdayDate, hours: "12:00 PM - 8:00 PM",},
    ]

    //--------------------------------------//
    //                                      //
    //          Todays Static Date          //
    //                                      //
    //-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V//

        // Gets the current date
        const d = new Date();

        // Gets the year
        let year = d.getUTCFullYear()

        // Gets the month and turns it into the word form
        let month = d.getUTCMonth();
        month = month + 1
        if (month < 10){
            month = "0" + month
        }

        // Gets the day, adds a 0 in front of single digits
        let day = d.getUTCDate();
        if (day < 10){
            day = "0" + day
        }

        // Creates current date string
        let currentDate = `${month}/${day}/${year}`

    //--------------------------------------//
    //                                      //
    //          Dynamic Shift Date          //
    //                                      //
    //-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V//

        // determines which index of the week array to start on (which day is today)
        let initDateIndex
        thisWeeksShift.forEach( (dayObj, index) => {
            if (dayObj.date == currentDate){
                initDateIndex = index
            }
        })

        // Using the code above, determines which day thw shift starts on. 
        // Puts it in a state so that rerender is called upon its change
        const [dateIndex, setDateIndex] = useState(initDateIndex)

        if (!thisWeeksShift[dateIndex]){
            return <NoShifts />
        }

        let dyanmicDate = {
            month: thisWeeksShift[dateIndex].date.split("/")[0],
            day: thisWeeksShift[dateIndex].date.split("/")[1] ,
            hours: thisWeeksShift[dateIndex].hours
        }

        let dayString = numberToDay(dateIndex)
        month = numberToMonth(dyanmicDate.month)


 //-------------------------------------------------------------//
 //                                                             //
 //                     OTHER RENDER METHODS                    //
 //                                                             //
 //-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-//

    // Renders the forward and backwards arrows, determines whether or not they are clickable
    const renderArrow = (frontOrBack) => {
        if (frontOrBack == "back"){
            if (dateIndex > 0){
                return(
                    <TouchableOpacity onPress={() => setDateIndex(dateIndex - 1)}>
                    <Gradient
                        colorOne="#534FFF"
                        colorTwo="#15A1F1"
                        style={{
                            height: 35,
                            width: 35,
                            borderRadius: 17.5
                        }}
                        hollow={true}
                        hollowColor={"#f2f2f2"}
                        hollowBorderSize="medium"
                        hollowStyles={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={ShiftPlannerStyles.arrowActive}>{"<"}</Text>
                    </Gradient>
                </TouchableOpacity>
                )
            }
            else{
                return(
                    <View style={{
                        height: 35,
                        width: 35, 
                        borderRadius: 100,
                        borderColor: "#888",
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={ShiftPlannerStyles.arrowInactive}>{"<"}</Text>
                </View>
                )
            }
        }
        else{

            if (dateIndex < 6){
                return(
                    <TouchableOpacity onPress={() => setDateIndex(dateIndex + 1)}>
                        <Gradient
                            colorOne="#534FFF"
                            colorTwo="#15A1F1"
                            style={{
                                height: 35,
                                width: 35,
                                borderRadius: 17.5
                            }}
                            hollow={true}
                            hollowColor={"#f2f2f2"}
                            hollowBorderSize="medium"
                            hollowStyles={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={ShiftPlannerStyles.arrowActive}>{">"}</Text>
                        </Gradient>
                    </TouchableOpacity>
                )
            }
            else{
                return(
                    <View
                        style={{
                            height: 35,
                            width: 35, 
                            borderRadius: 100,
                            borderColor: "#888",
                            borderWidth: 2,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={ShiftPlannerStyles.arrowInactive}>{">"}</Text>
                    </View>
                )
            }
        }
    }



 //-------------------------------------------------------------//
 //                                                             //
 //                      MAIN RENDER METHOD                     //
 //                                                             //
 //-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-//

    return (
        <View style={{backgroundColor: "#f2f2f2"}}>
            <Banner />

            {/* Header */}
            <View style={ShiftPlannerStyles.header}>
                <Text style={ShiftPlannerStyles.title} >Shift Planner</Text>
                <Text style={ShiftPlannerStyles.subtitle}>WEEKLY SCHEDULE</Text>
            </View>

            {/* Date and Arrows */}
            <View style={ShiftPlannerStyles.dateContainer}>

                {/* BACK DATE ARROW */}
                <View style={{marginLeft: 30}}>
                    {renderArrow("back")}
                </View>

                {/* DATE CONTAINER */}
                <View style={{
                    width: 100,
                    alignItems: 'center',
                    marginLeft: maxWidth / 2 - 120,
                    marginRight: maxWidth / 2 - 120
                }}>
                    <View style={{
                        flexDirection: "row",
                        width: 90,
                        alignItems: 'center',
                    }}>
                        <Text style={ShiftPlannerStyles.monthText}>{month}</Text>
                        <Text style={ShiftPlannerStyles.dayText}> {dyanmicDate.day}</Text>
                    </View>
                    <Text style={ShiftPlannerStyles.dateText}>{dayString}</Text>
                </View>

                {/* FRONT DATE ARROW */}
                <View>
                    {renderArrow("forward")}
                </View>
                
            </View>

            {/* Shift Data */}
            <View style={ShiftPlannerStyles.shiftInfo}>

                {/* Shift Profile */}
                <View style={ShiftPlannerStyles.shiftProfile}>
                    
                    {/* FICO Rank */}
                    <View style={{marginTop: 25, marginLeft: "12%", marginRight: "5%"}}>
                        <Gradient
                            colorOne="#534FFF"
                            colorTwo="#15A1F1"
                            style={{
                                height: 36,
                                width: 36,
                                borderRadius: 18
                            }}
                            hollow={true}
                            hollowColor={"white"}
                            hollowBorderSize="large"
                            hollowStyles={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={ShiftPlannerStyles.ficoRank}>4</Text>
                        </Gradient>
                    </View>

                    {/* PFP */}
                    <Gradient
                        colorOne="#534FFF"
                        colorTwo="#15A1F1"
                        style={{
                            height: 86,
                            width: 86,
                            borderRadius: 43
                        }}
                        hollow={true}
                        hollowColor={"white"}
                        hollowBorderSize="medium"
                        hollowStyles={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        
                    </Gradient>


                    {/* Msg Button */}
                    <View style={{marginTop: 25, marginLeft: '5%'}}>
                        <Gradient
                            colorOne="#534FFF"
                            colorTwo="#15A1F1"
                            style={{
                                height: 36,
                                width: 36,
                                borderRadius: 18
                            }}
                            hollow={true}
                            hollowColor={"white"}
                            hollowBorderSize="large"
                            hollowStyles={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            
                        </Gradient>
                    </View>
                    

                </View>

                {/* Name and Hours */}
                <View style={ShiftPlannerStyles.nameAndHours}>
                    <Text style={ShiftPlannerStyles.nameText}>
                        {user.firstname} {user.lastname}
                    </Text>
                    <Text style={ShiftPlannerStyles.hoursText}>
                        {dyanmicDate.hours.split("-")[0]} - {dyanmicDate.hours.split("-")[1] }
                    </Text>
                </View>

                {/* Numeric Values and Titles */}
                <View style={ShiftPlannerStyles.valueBox}>

                    {/* Row One */}
                    <View style={ShiftPlannerStyles.valRow}>

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={ShiftPlannerStyles.valText}>{user.shiftPlanners[currentSP].phoneId}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Phone ID</Text>
                        </View>

                        <View style={{height: 30, width: 1, backgroundColor: "#DDD", marginTop: 10}} />

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={ShiftPlannerStyles.valText}>{user.shiftPlanners[currentSP].deviceId}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Device ID</Text>
                        </View>

                    </View>

                    {/* Row Two */}
                    <View style={ShiftPlannerStyles.valRow}>

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={ShiftPlannerStyles.valText}>{user.shiftPlanners[currentSP].vehicleId}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Vehicle ID</Text>
                        </View>

                        <View style={{height: 30, width: 1, backgroundColor: "#DDD", marginTop: 10}} />

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={ShiftPlannerStyles.valText}>{user.shiftPlanners[currentSP].cxNumber}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>CX Number</Text>
                        </View>

                    </View>

                </View>

                <View style={{alignItems: 'center',  marginTop: "6%"}}>
                    <Text style={ShiftPlannerStyles.subtitle2}>
                        MESSAGE
                    </Text>
                    <ScrollView style={ShiftPlannerStyles.messageBox}>
                        <Text style={ShiftPlannerStyles.messageText}>
                            {user.shiftPlanners[currentSP].message}
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </View>
    )
}

export default ShiftPlanner