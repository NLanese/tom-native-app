import React from "react"
import { useHistory } from 'react-router-native';
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const ProductivityButton = () => {
    let history = useHistory()

    return (
        // <View style={ButtonBoxStyles.cardContainer}>
        //     <Card onPress={() => {history.push("/productivity")}} >
        //         <Card.Cover source={require('../../../../assets/productivity.jpg')} style={ButtonBoxStyles.image}/>
        //         <Card.Content style={ButtonBoxStyles.card}>
        //             <Title
        //                 style={ScoreCardStyles.CardContent}
        //             >
        //                 Productivity
        //             </Title>
        //         </Card.Content>
        //     </Card>
        // </View>
    <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {history.push("/productivity")}}>
            <View>
                <Image 
                    style={ButtonBoxStyles.image}
                    source={require('../../../../assets/productivity-icon.jpeg')}/>
            </View> 
            <View style={ButtonBoxStyles.label}>
                <Text style={{textAlign: 'center'}}>Productivity</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ProductivityButton
