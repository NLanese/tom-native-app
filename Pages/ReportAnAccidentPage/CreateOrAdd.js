import react from "react";
import { View, Text } from 'react-native'
import { CreateOrAddStyles } from "../../Styles/ReportAnAccidentStyles";
import Title from './CreateOrAddComponents/Title'
import CreateAccidentButton from "./CreateOrAddComponents/CreateAccidentButton";
import AddToAccidentButton from "./CreateOrAddComponents/AddToAccident";
import NavBar from "../../Global/NavBar";

const CreateOrAdd = () => {

    return (
        <View style={CreateOrAddStyles.container}>
            <NavBar />
            <Title />
            <CreateAccidentButton />
            <AddToAccidentButton />
        </View>
    )
}
export default CreateOrAdd