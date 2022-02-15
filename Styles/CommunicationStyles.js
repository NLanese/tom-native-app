import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

let threadBoxWidth = maxWidth - 60

let modalHeight = (maxHeight - (maxHeight * 0.22))
let namesListMargins = maxWidth - 300
namesListMargins = namesListMargins / 2

const CommunicationStyles = StyleSheet.create({ 
    container: {
        height: maxHeight - 75,
        flexDirection: 'column',
    },
    threadLabel: {
        height: maxHeight * 0.1,
        alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 10,
    },
    labelText: {
        fontFamily: 'GilroyMedium'
    },
    thread:{
        top: maxWidth * 0.04,
    },
    threadContainer: {
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 0.8,
        borderColor: '#E2E8F1',
        backgroundColor: "#f1f1f1",
        height: maxHeight * 0.71
    },
    sendButton: {
        backgroundColor: "#E2E8F1",
        borderWidth: 0.7,
        borderRadius: 5,
        position: 'absolute',
        justifyContent: 'center',
        width: maxWidth * 0.15,
        height: maxHeight * 0.084,
        left: maxWidth * 0.84,
        top: maxHeight * 0.01
    }
})

const ChatroomsStyles = StyleSheet.create({
    headerBox: {
        height: maxHeight * 0.15,
        backgroundColor: 'white'
    },
    titleBox: {
        marginLeft: 30
    },
    title: {
        fontFamily: "GilroyBold",
        fontSize: 30,

        letterSpacing: -0.5,

        color: '#444444'
    },
    searchBar: {
        backgroundColor: '#EEEEEE',
        width: 263,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 30
    },
//-----------------------------------
    chatroomBox: {
        marginTop: 33,
        marginLeft: 30,
        width: threadBoxWidth
    },
    chatroomTitleBox: {
        // marginBottom: 20,
    },
    chatroomBoxTitleText: {
        fontFamily: 'GilroyBold',
        fontSize: 10,

        letterSpacing: 2,
        color: '#888888'
    },
    divider: {
        height:  2.5,
        color: '#DDDDDD'
    },
//------------------------------------
    addButton: {
        width: 60,
        height: 60,
    },
    addButtonBox: {
        zIndex: 100,

        position: 'absolute',
        marginTop: maxHeight * .85,
        marginLeft: maxWidth * .76,

        shadowColor: '#000000',
		shadowOffset: {width: .4, height: 6},
		shadowOpacity: 0.3
    }
})

const ThreadCardStyles = StyleSheet.create({
    threadName: {
        position: 'absolute',
        marginTop: 24,
        marginLeft: 60
    },
    nameText: {
        fontFamily: 'GilroyBold',
        fontSize: 14,
        color: '#444444'
    },
    previewBox: {
        position: 'absolute',
        marginTop: 39,
        marginLeft: 60
    },
    previewText: {
        fontFamily: "GilroySemiBold",
        fontSize: 11,
        color: '#888888'
    }
})

const ThreadDetailStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        marginTop: maxHeight * -0.28,
        marginLeft: maxWidth * -.5,

        height: modalHeight,
        width: maxWidth,
        backgroundColor: '#f9f9f9'
    },
//---------------------------------
    doneBox: {
        marginTop: 10,
        marginLeft: namesListMargins + 260
    },
    doneText:{
        fontFamily: "GilroySemiBold",
        fontSize: 16
    },
//---------------------------------
    labelBox: {
        position: 'relative',
        marginLeft: namesListMargins,
        marginTop: 20
    },
    labelText: {
        fontFamily: "GilroySemiBold",
        fontSize: 18
    },
//---------------------------------
    nameListContainer: {
        height: 350,
    },
    namesList: {
        width: 300,
        marginLeft: namesListMargins,
    },
    nameCard: {
        marginTop: 5,
        backgroundColor: "#f1f1f1",
        borderRadius: 10,
        flexDirection: 'row',
        padding: 5,
    },
    nameText: {
        flex: 1,
        fontFamily: "GilroyMedium",
        fontSize: 18,
        color: "#444444"
    },
    removeBox: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    removeText: {
        fontFamily: "GilroyMedium",
        fontSize: 18,
        color: "red"
    },
//---------------------------------
    addButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width: '100%',
    }
})

const ContactStyles = StyleSheet.create({
    container:{
        paddingTop: maxHeight * 0.013
    },
    scrollContainer: {
        height: maxHeight * 0.65
    },
//----=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    header: {
        backgroundColor: 'white',
        height: 60
    },
    searchBar: {
        width: maxWidth * .8,
        marginLeft: maxWidth * .1
    },
//----=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    footer: {
        backgroundColor: 'white',
        height: maxHeight * 0.337
    },
    completeSelection: {
        position: 'absolute',
        backgroundColor: '#534FFF',
        height: 40,
        width: maxWidth * 0.2,
        marginTop: "5%",
        marginLeft: maxWidth * .4,
        borderColor: '#876FFF',
        borderWidth: 3,
        borderRadius: 5
    },
    doneText: {
        fontFamily: "GilroyBold",
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    },
//-----------------------------------------
    card:{ 
        left: 30,
        marginTop: maxHeight * 0.02,
        height: 70,
        width: threadBoxWidth,
    },
//-----------------------------------------
    image: {
        backgroundColor: 'black',
        height: 35,
        width: 35,
        borderRadius: 100,
    },
    nameView: {
        position: 'relative',
        marginLeft: maxWidth * 0.20,
        top: maxHeight * -0.042
    },
    title:{
        fontFamily: 'GilroySemiBold',
        fontSize: 18,
        letterSpacing: -0.5
    },
//-----------------------------------------
    addButton:{
        position: 'absolute',
        marginLeft: '80%',
    },
    addText: {
        marginTop: 10,
        color: '#534FFF',
        fontFamily: 'GilroyBold',
        fontSize: 14,
        letterSpacing: .5
    },
    removeButton: {
        position: 'absolute',
        marginLeft: '80%',
    },
    removeText: {
        marginTop: 10,
        color: "red",
        fontFamily: 'GilroyBold',
        fontSize: 14,
        letterSpacing: .5
    },
//-----------------------------------------
    divider:{
        borderBottomWidth: 3,
        borderColor: '#DDDDDD',
        width: threadBoxWidth,
    },
})

export{
    CommunicationStyles,
    ChatroomsStyles,
    ThreadCardStyles,
    ThreadDetailStyles,
    ContactStyles
}