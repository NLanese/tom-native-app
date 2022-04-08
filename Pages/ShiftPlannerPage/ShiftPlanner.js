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
import getTodaysDate from "../../Hooks/getTodaysDate";

// import ShiftInfo from "../ScrappedPages/ShiftInfo";
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
    const [user, setUser] = useRecoilState(userState)

    // Local States
    
        // Current Date Selected
        const [daysAhead, setDaysAhead] = useState(0)
        const [currentDate, setCurrentDate] = useState(getTodaysDate(daysAhead))

        const day = numberToMonth(currentDate.day)
        const month = numberToMonth(currentDate.month)
        const year = numberToMonth(currentDate.year)

        const dayOfTheWeek = numberToDay(currentDate.day)

        const initShift  = user.shifts.find(shift => shift.date == currentDate.date)
        const [currentShift, setCurrentShift] = useState(initShift)

 //-------------------------------------------------------------//
 //                                                             //
 //                         HANDLERS                            //
 //                                                             //
 //-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-//

    const handleDateChange = (add_or_subtract) => {
        let changer = 0
        if (add_or_subtract == "add"){
            changer = 1
        }
        if (add_or_subtract == "subtract"){
            changer = -1
        }
        setCurrentDate(getTodaysDate(daysAhead + changer))
        set
    }


 //-------------------------------------------------------------//
 //                                                             //
 //                     OTHER RENDER METHODS                    //
 //                                                             //
 //-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-//

    // Renders the forward and backwards arrows, determines whether or not they are clickable
    const renderArrow = (frontOrBack) => {
        if (frontOrBack == "back"){
            if (daysAhead > 0){
                return(
                    <TouchableOpacity onPress={() => setDaysAhead(daysAhead - 1)}>
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

            if (daysAhead < 30){
                return(
                    <TouchableOpacity onPress={() => setDaysAhead(daysAhead + 1)}>
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

    const renderShiftAssignments = () => {

        const generateDeviceComponents = () => {
            if (!currentShift || currentShift == 'undefined'){
                return(
                    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: -28, width: 280}}>
                        <Text style={{...ShiftPlannerStyles.subtitle, fontSize: 12, textAlign: 'center'}}>You do not have any assignments today</Text>
                    </View>
                )
            }
            else if (currentShift.date){
                let allDevices = Object.keys(currentShift)
                allDevices = allDevices.filter(deviceName => {
                    if (deviceName != "date"){
                        return deviceName
                    }
                })
                return allDevices.map( (deviceName, index) => {
                    return(
                        <View style={{...ShiftPlannerStyles.cell, alignContent: 'center'}} key={index}>
                            <Text style={ShiftPlannerStyles.valText}>{currentShift[deviceName]}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>{deviceName} ID</Text>
                        </View>
                    )
                })
            }
        }

        return (
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{...ShiftPlannerStyles.subtitle2, fontSize: 14}}>ASSIGNNMENTS</Text>
                </View>
                {generateDeviceComponents()}
            </View>
        )
    }



 //-------------------------------------------------------------//
 //                                                             //
 //                      MAIN RENDER METHOD                     //
 //                                                             //
 //-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-//

    console.log("Current Shift")
    console.log(currentShift)

    console.log("Current Date:")
    console.log(currentDate)

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
                        <Text style={ShiftPlannerStyles.dayText}> {currentDate.day}</Text>
                    </View>
                    <Text style={ShiftPlannerStyles.dateText}>{dayOfTheWeek}</Text>
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
                </View>

                {/* Numeric Values and Titles */}
                <View style={ShiftPlannerStyles.valueBox}>

                    {renderShiftAssignments()}
                    {/* Row One */}
                    {/* <View style={ShiftPlannerStyles.valRow}>

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={ShiftPlannerStyles.valText}>{user.shiftPlanners[currentSP].phoneId}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Phone ID</Text>
                        </View>

                        <View style={{height: 30, width: 1, backgroundColor: "#DDD", marginTop: 10}} />

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={ShiftPlannerStyles.valText}>{user.shiftPlanners[currentSP].deviceId}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Device ID</Text>
                        </View>

                    </View> */}

                    {/* Row Two */}
                    {/* <View style={ShiftPlannerStyles.valRow}>

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={ShiftPlannerStyles.valText}>{user.shiftPlanners[currentSP].vehicleId}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Vehicle ID</Text>
                        </View>

                        <View style={{height: 30, width: 1, backgroundColor: "#DDD", marginTop: 10}} />

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={ShiftPlannerStyles.valText}>{user.shiftPlanners[currentSP].cxNumber}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>CX Number</Text>
                        </View>

                    </View> */}

                </View>

                <View style={{alignItems: 'center',  marginTop: "6%"}}>
                    <Text style={ShiftPlannerStyles.subtitle2}>
                        MESSAGE
                    </Text>
                    <ScrollView style={ShiftPlannerStyles.messageBox}>
                        <Text style={ShiftPlannerStyles.messageText}>
                            {/* {user.shiftPlanners[currentSP].message} */}
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </View>
    )
}

export default ShiftPlanner