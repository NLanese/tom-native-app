import React from "react";
import { View, Text,  } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';

const TeamEmployees = ({driverData}) => {

    return(
        <Card>
            <View>
                {key}
            </View>
            <View>

            </View>
            <View>
                <Text>{driverData.firstname} {driverData.lastname}</Text>
            </View>
        </Card>
    )
}
export default TeamEmployees