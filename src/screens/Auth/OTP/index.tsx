import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OTPInput from '@molecules/OTPInput'

const OTPScreen = () => {
    return (
        <View>
            <OTPInput
                length={6}
                onChangeTextInput={(otp) => console.log(otp)}
                name='otp'
                control={{}}
                rules={{}}
            />
        </View>
    )
}

export default OTPScreen

const styles = StyleSheet.create({})