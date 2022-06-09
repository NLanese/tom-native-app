import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const ErrorMessage = ({message}) => {
    if (!message){
        return null
    }
    else{
        return(
            <Text style={{color: 'red', fontSize: 16, letterSpacing: 1.5, fontFamily: 'GilroyMedium'}}>{message}</Text>
        )
    }
} 

export default ErrorMessage