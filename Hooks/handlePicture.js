import { View, Text, Image } from 'react-native'
import SomeDudesFace from "../assets/SomeDudesFace.jpeg"

const handlePicture = (pic, size) => {
    if (pic == "Default"){
        return <Image source={SomeDudesFace} style={{height: size, width: size, borderRadius: 100}}/>
    }
    else{
        console.log("other")
    }
}

export default handlePicture