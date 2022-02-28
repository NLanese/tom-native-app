import { Input } from '@ui-kitten/components';
import { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';


let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const UpdateField = (props) => {

    const dynamicStyles = StyleSheet.create({
        activeInput: {
            backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 15,
            width: maxWidth - 60,
            marginLeft: 30,
            marginBottom: 8
        },
        inactiveInput: {
            backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
            borderColor: 'rgba(52, 52, 52, 0.3) !important',
            borderRadius: 15,
            width: maxWidth - 60,
            marginLeft: 30,
            marginBottom: 8
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

    return(
        <Input
            onPressIn={() => setActive(true)}
            onEndEditing={() => setActive(false)}
            placeholder={labelMaker(props.field)}
            name={props.field}
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