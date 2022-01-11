import React from "react";
import { View, Text,  } from 'react-native'
import { Card, Avatar } from 'react-native-paper';
import { TeamStyles } from "../../../../Styles/ScoreCardStyles";
import SomeDudesFace from '../../../../assets/SomeDudesFace.jpeg'


const TeamEmployees = ({driverData, rank}) => {

    const lowerCaseNameMaker = (name) => {
        return name[0] + name.slice(1).toLowerCase()
    }

    // driverData.firstname = driverData.firstname[0] + driverData.firstname.slice(1).toLowerCase()
    // driverData.lastname = driverData.lastname[0] + driverData.lastname.slice(1).toLowerCase()

    let name = lowerCaseNameMaker(driverData.firstname) + " " + lowerCaseNameMaker(driverData.lastname)

    return(
        <Card style={TeamStyles.employeeCard}>
            <View style={TeamStyles.rank}>
                <Text style={{fontWeight: '800'}}>{rank}</Text>
            </View>
            <View style={TeamStyles.employeeNameplate}>
                <Text style={TeamStyles.employeeNameTag}>{name}</Text>
            </View>
            <View style={TeamStyles.smallIcon}>
                <Avatar.Image
                    source={SomeDudesFace}
                    size={30}
                />
            </View>
        </Card>
    )
}
export default TeamEmployees