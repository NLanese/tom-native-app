import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Input } from '@ui-kitten/components';
import axios from 'axios';

const ForgotPasswordModal = ({ visible, setVisible }) => {
    const [email, setEmail] = useState()
    const [completed, setCompleted] = useState(false)

    const handleSubmit = async () => {
        await axios.get(`http://localhost:5001/password/reset/${email}`)
        .then((res) => console.log(res.status))
        .catch((err) => console.log(err))

        await setCompleted(true)
    }

    return (
        <View style={styles.container}>

            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                <Text>Please enter email address and youll recieve a link with further directions</Text>

                <Input
                    placeholder='Place your Text'
                    onChangeText={email => setEmail(email)}
                    />

                {completed === true ? (<Text>Check your email. If the email exist in our system you should recieve further instructions</Text>) : null}

                <Button onPress={handleSubmit}>
                    SUBMIT
                </Button>   

                <Button onPress={() => setVisible(false)}>
                    DISMISS
                </Button>
                </Card>
            </Modal>

        </View>
    )
}

export default ForgotPasswordModal

const styles = StyleSheet.create({
    container: {
      minHeight: 192,
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });