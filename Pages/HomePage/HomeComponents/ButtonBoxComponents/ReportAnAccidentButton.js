import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const ReportAnAccidentButton = () => {
    // let history = useHistory()
    let maxWidth= Dimensions.get('window').width
    let maxHeight= Dimensions.get('window').height
    const navigation = useNavigation()


    return (
        // <View style={ButtonBoxStyles.cardContainer}>
        //     <Card onPress={() => {history.push("/leadership_notified")}}>
        //         <Card.Cover source={require('../../../../assets/report-accident.jpg')} style={ButtonBoxStyles.image}/>
        //         <Card.Content style={ButtonBoxStyles.card}>
        //             <Title
        //                 style={ScoreCardStyles.CardContent}
        //             >
        //                 Report Accident
        //             </Title>
        //         </Card.Content>
        //     </Card>
        // </View>
    <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {navigation.navigate("leadership_notified")}}>
            <View>
                <Image 
                    style={{
                        alignContent: 'center',
                        height: maxHeight * 0.183,
                        width: '82%',
                        marginLeft: maxHeight * 0.025
                    }}
                    source={require('../../../../assets/reporting-icon.jpeg')}/>
            </View> 
            <View style={{
                width: '100%',
                // borderWidth: 2,
                textAlign: 'center',
                alignItems: 'center',
                marginTop: 8,
                left: -maxWidth * 0.035
            }}>
                <Text style={{textAlign: 'center'}}>Report an Accident</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ReportAnAccidentButton