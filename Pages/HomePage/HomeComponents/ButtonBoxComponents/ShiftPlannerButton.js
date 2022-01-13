import React from "react"
import { useHistory } from 'react-router-native';
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { Button, Card, Title } from 'react-native-paper';
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"



const ShiftPlannerButton = () => {
    let history = useHistory()

    return (
        // <View style={ButtonBoxStyles.cardContainer}>
        //     <Card onPress={() => {history.push("/shift_planner")}}>
        //         <Card.Cover source={require('../../../../assets/shift-planner.jpg')} style={ButtonBoxStyles.image}/>
        //         <Card.Content style={ButtonBoxStyles.card}>
        //             <Title
        //                 style={ScoreCardStyles.CardContent}
        //             >
        //                 Shift Planner
        //             </Title>
        //         </Card.Content>
        //     </Card>
        // </View>
        <View style={ButtonBoxStyles.clickable}>
            <TouchableOpacity onPress={() => {history.push("/shift_planner")}}>
                <View >
                    <Image 
                        style={ButtonBoxStyles.image}
                        source={require('../../../../assets/shift-planner-icon.jpeg')}/>
                </View> 
                <View style={ButtonBoxStyles.label}>
                    <Text style={{textAlign: 'center'}}>Shift Planner</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ShiftPlannerButton
