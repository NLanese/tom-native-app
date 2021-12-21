import react from 'react';
import { View, Text } from 'react-native'
import { buttonBox } from '../../../Styles/HomeStyles';
import ScoreCardButton from './ButtonBoxComponents/ScoreCardButton';

const ButtonBox = () => {

    return (
        <View style={buttonBox.container}>
            <ScoreCardButton />
        </View>
    )
}

export default ButtonBox