import { StyleSheet, Dimensions } from "react-native";
import { backgroundColor, borderTopColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

let weekDayCardHeight = (maxHeight / 4) - 20
let weekDayCardWidth = (maxWidth / 2) - 2.5

const ShiftPlannerStyles = StyleSheet.create({
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    title: {
        fontFamily: "GilroyBold",
        fontSize: 30,

        letterSpacing: -0.5,
        color: '#444444',

        marginTop: 30,
        marginLeft: 30
    },
    subtitle: {
        marginLeft: 30,
        marginTop: 5,
        marginBottom: 5,

        fontFamily: 'GilroyBold',
        fontSize: 10,
        letterSpacing: 2,
        color: '#888888'
    },
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    header: {
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: "#DDD"
    },
    dateContainer: {
        marginTop: 20,
        marginBottom: 30,

        width: "100%",

        flexDirection: "row",
    },
    monthText: {
        fontFamily: "GilroyBold", 
        fontSize: 25,

        color: "#888",
        letterSpacing: -0.5
    },
    dayText: {
        fontFamily: "GilroyBold", 
        fontSize: 25,

        color: "#444",
        letterSpacing: -0.5,

        marginLeft: -3,
    },
    dateText: {
        fontFamily: "GilroyBold",
        letterSpacing: 2,
        color: "#888",
        fontSize: 12
    },
    arrowInactive: {
        fontFamily: "GilroySemiBold",
        color: "#888",
        textAlign: 'center',
        fontSize: 25,
        marginTop: 3,
        marginLeft: 2
    },
    arrowActive: {
        fontFamily: "GilroySemiBold",
        color: "#534FFF",
        textAlign: 'center',
        fontSize: 25,
        marginTop: 3,
        marginLeft: 2
    },
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    shiftInfo: {
        marginLeft: 30,
        // marginTop: 23,

        width: maxWidth - 60,
        height: maxHeight * 0.55,
        borderRadius: 20,

        backgroundColor: "white",
        shadowColor: '#222',
		shadowOffset: {width: 0, height: 25},
		shadowOpacity: 0.10,
		shadowRadius: 20
    },

    shiftProfile: {
        marginTop: 30,
        marginLeft: 30,

        width: maxWidth - 120,
        flexDirection: 'row'
    },

    ficoRank: {
        fontFamily: "GilroySemiBold",
        color: "#534FFF",
        textAlign: 'center',
        fontSize: 25,
        marginTop: 1,
        marginLeft: -1
    },
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    nameAndHours: {
        marginTop: 20,
        alignItems: "center"
    },
    nameText: {
        fontFamily: "GilroyBold",
        fontSize: 25,
        color: "#444",
        letterSpacing: -0.5
    },
    hoursText: {
        marginTop: 5,
        fontFamily: "GilroyBold",
        fontSize: 14,
        color: "#888",
        letterSpacing: 2
    },
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    valueBox: {
        marginLeft: 30,
        marginTop: 20,
        width: maxWidth - 120,
    },
    valRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: "#DDD",
        borderTopWidth: 1
    },
    cell: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 80
    },
    valText: {
        marginTop: 10,
        fontFamily: "GilroyBold",
        fontSize: 25,
        letterSpacing: -0.5,
        color: "#444"
    },
    valTitle: {
        fontFamily: "GilroySemiBold",
        fontSize: 10,
        color: "#888"
    },
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    subtitle2: {
        fontFamily: "GilroyBold",
        fontSize: 10,
        color: "#888",
        letterSpacing: 2
    },
    messageBox: {
        marginTop: 8,
        width: maxWidth - 160,
        height: maxHeight * 0.1
    },
    messageText: {
        fontFamily: "GilroySemiBold",
        fontSize: 13,
        color: "#888"
    }
})

export{
    ShiftPlannerStyles
}