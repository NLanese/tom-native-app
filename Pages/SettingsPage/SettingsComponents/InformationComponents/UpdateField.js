import { TextInput } from 'react-native-paper';
import { UpdateFieldStyles } from "../../../../Styles/SettingStyles";



// Comes with three props
// - field which will be a string of what field this is a component for
// - value which will be the user's current value for this field
// handleInput which will be the reference to the handleInput function from the parent Componentn
const UpdateField = (props) => {

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
        else if (input === 'confirmPassword'){
            return "Confirm Your Password"
        }
        else{
            return input.charAt(0).toUpperCase() + input.slice(1)
        }
    }

    return(
        <TextInput
                    placeholder={props.value}
                    name={props.field}
                    style={UpdateFieldStyles.Input}
                    selectionColor='#24296f'
                    activeOutlineColor='#24296f'
                    activeUnderlineColor='#24296f'
                    label={labelMaker(props.field)}
                    onChangeText={(input) => {
                        props.handleInput(props.field, input)
                    }}
        />
    )
}
export default UpdateField