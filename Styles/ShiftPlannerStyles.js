import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

let weekDayCardHeight = (maxHeight / 4) - 20
let weekDayCardWidth = (maxWidth / 2) - 2.5

const ShiftPlannerStyles = StyleSheet.create({

})

export{
    ShiftPlannerStyles
}