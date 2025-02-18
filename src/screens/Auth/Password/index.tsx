import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomLinearGradient from '@atoms/LinearGradient'
import { Controller, useForm } from 'react-hook-form'
import { blockStyles } from '@styles/block'
import { flexBoxStyles } from '@styles/flexBox'
import { fontStyles } from '@styles/fonts'
import ButtonAction from '../components/ButtonAction'
import { style } from '@themes/index'

const PasswordScreen = () => {

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        watch
    } = useForm({
        defaultValues: {
            email: "",
        },
        mode: "onChange",
    })

    const emailValue = watch('email')
    const onSubmit = (data: any) => console.log(data)

    // #region Toggle password visibility
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)
    // #endregion

    return (
        <CustomLinearGradient>
            <View style={styles.title}>
                <Image source={{ uri: 'https://media.istockphoto.com/id/1433173566/vector/mobile-phone-unlocked-notification-button-and-password-field-notice-vector-concept-of.jpg?s=612x612&w=0&k=20&c=Wgfl5Sa6cf3oHVxP0EtHvkUQfhdhHEoM_qdhjGEFnrQ=' }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text style={[fontStyles.fontButton, styles.titleMain]}>Welcome back!</Text>
                <Text style={{ color: style.colors.white.text, fontSize: 15 }}>Use your email to register or log in.</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <View style={styles.containerForm}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <Text style={blockStyles.label}>Email</Text>
                                <View style={[blockStyles.input, flexBoxStyles.centerRowSpaceBetween]}>
                                    <TextInput
                                        placeholder="Email"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                </View>
                            </View>
                        )}
                        name="email"
                    />

                    <ButtonAction
                        style={[styles.button, blockStyles.main]}
                        onPress={handleSubmit(onSubmit)}
                        disabled={!emailValue || !isValid}
                    >
                        <Text style={{ color: style.colors.white.bg }}>Next</Text>
                    </ButtonAction>
                </View>

                <View style={styles.spacing}>
                </View>
            </View>
        </CustomLinearGradient >
    )
}

export default PasswordScreen


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1.5,
        gap: 13,
    },
    titleMain: {
        fontSize: 24,
    },
    form: {
        flex: 2.8,
        gap: 20,
    },
    containerForm: {
        gap: 30,
        backgroundColor: style.colors.white.bg,
        borderRadius: style.sizes.borderRadius.br_13,
        marginHorizontal: 30,
        paddingVertical: 30,
    },
    button: {
        height: 45
    },
    spacing: {
        flex: 3
    }
})
