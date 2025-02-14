import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from '@themes/index'
import ButtonAction from './components/ButtonAction'


const ChooseAuthenScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://res.cloudinary.com/dwyzqcunj/image/upload/v1739522069/image_1_msk4z8.png' }}
                style={styles.banner}
            />
            <Text style={styles.textSlogan}>Let Your Children
                {"\n"} Be Healthy</Text>
            <View style={styles.actionLogin}>
                <ButtonAction>Sign In</ButtonAction>
                <ButtonAction>Sign Up</ButtonAction>
            </View>
        </View>
    )
}

export default ChooseAuthenScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: style.colors.blue.bg,
        opacity: 0.9,
        flex: 1
    },
    banner: {
        flex: 2,
    },
    textSlogan: {
        color: style.colors.white.bg,
        fontSize: style.fonts.size.superXLarge,
        textAlign: "center",
        marginTop: 30,
        fontWeight: "bold",
        marginBottom: 60
    },
    actionLogin: {
        gap: 25,
        flex: 1
    }

})