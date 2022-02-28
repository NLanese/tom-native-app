import { Input } from '@ui-kitten/components';
import { useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';


let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const UpdateField = (props) => {

    console.log("\n\n\n\n")
    console.log(props.userData.password)
    console.log(props.userData.confirmPassword)

    let matching
    if (props.userData.password == props.userData.confirmPassword){
        console.log("match")
        matching = true
    }
    if (props.userData.password != props.userData.confirmPassword){
        console.log("No match")
        matching = false
    }

    const [passwordsMatch, setPasswordsMatch] = useState(matching)

    // Handles Error Outline 
    const handleNoMatch = (style) => {
        console.log(props.userData.password)
        console.log(props.userData.confirmPassword)
        if (passwordsMatch){
            return style
        }
        else{
            console.log("Should be red")
            return dynamicStyles.noMatch
        }
    }

    const dynamicStyles = StyleSheet.create({
        activeInput: {
            backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
           
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 15,

            position: 'relative',
            height: 50,
            width: maxWidth - 60,

            marginLeft: 30,
            marginTop: 5,
            marginBottom: 20
        },
        inactiveInput: {
            backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
            
            borderColor: 'rgba(52, 52, 52, 0.3) !important',
            borderRadius: 15,

            
            height: 50,
            width: maxWidth - 60,

            marginLeft: 30,
            marginTop: 5,
            marginBottom: 20
        },
        noMatch: {
            backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
           
            borderColor: 'red',
            borderWidth: 2,
            borderRadius: 15,

            position: 'relative',
            height: 50,
            width: maxWidth - 60,

            marginLeft: 30,
            marginTop: 5,
            marginBottom: 20
        }
    })

    const [isActive, setActive] = useState(false)

    const determineStyle = () => {
        if (isActive){
            return{
                style: dynamicStyles.activeInput,
                color: 'white'
            }
        }
        else{
            return{
                style: dynamicStyles.inactiveInput,
                color: '#adadad'
            }
        }
    }

    const labelMaker = (input) => {
        if (input === 'firstname'){
            return "First Name"
        }
        else if (input === 'lastname'){
            return "Last Name"
        }
        else if (input === 'phoneNumber'){
            return "Phone Number"
        }
        else if (input === 'adminEmail'){
            return "Admin Email"
        }
        else if (input === 'confirmPassword'){
            return "Confirm Your Password"
        }
        else{
            return input.charAt(0).toUpperCase() + input.slice(1)
        }
    }

    if (props.field == "password" || props.field == "confirmPassword"){
        console.log("no match")
        return(
            <Input
                onPressIn={() => setActive(true)}
                onEndEditing={() => setActive(false)}
                placeholder={labelMaker(props.field)}
                name={props.field}
                height={50}
                placeholderTextColor={determineStyle().color}
                style={handleNoMatch(determineStyle().style)}
                textStyle={{color: determineStyle().color, fontSize: 18}}
                onChangeText={(input) => {
                    props.handleInput(props.field, input)
                }}
            />
        )
    }

    return(
        <Input
            onPressIn={() => setActive(true)}
            onEndEditing={() => setActive(false)}
            placeholder={labelMaker(props.field)}
            name={props.field}
            height={50}
            placeholderTextColor={determineStyle().color}
            style={determineStyle().style}
            textStyle={{color: determineStyle().color, fontSize: 18}}
            onChangeText={(input) => {
                props.handleInput(props.field, input)
            }}
        />
    )
}
export default UpdateField