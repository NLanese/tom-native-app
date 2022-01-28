import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const RosterStyles = StyleSheet.create({
    container:{
        paddingTop: maxHeight * 0.013
    },
    card:{ 
        left: maxWidth * 0.05,
        marginTop: maxHeight * 0.02,
        height: maxHeight * 0.08
        
    },
    divider:{
        left: maxWidth * 0.05,
        borderBottomWidth: 3,
        borderColor: '#E2E8F1',
        width: maxWidth * 0.8
    },
    nameView: {
        position: 'relative',
        marginLeft: maxWidth * 0.20,
        top: maxHeight * -0.03
    },
    title:{
        fontSize: 18
    },
    dateView: {
        position: 'relative',
        marginLeft: maxWidth * 0.20,
        top: maxHeight * -0.02
    },
    subtitle:{
        fontSize: 12,
        color: 'grey'
    }
})

export {
    RosterStyles
}