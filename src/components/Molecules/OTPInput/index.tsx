import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { IComponents } from 'src/types/IComponents';
import { Controller } from 'react-hook-form';

const OTPInput = ({ length, name, control, rules }: IComponents.IOTPINPUT) => {
    console.log(length, name, control, rules);

    const [otp, setOTP] = useState(new Array(length).fill(''));


    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {otp.map((item, index) => (
                        <View key={index} style={{ width: 40, height: 40, borderWidth: 1, borderColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{item}</Text>
                        </View>
                    ))}
                </View>
            )}
        />

    )
}

export default OTPInput

const styles = StyleSheet.create({})