import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AuthStyles } from '@styles/auth'
import { fontStyles } from '@styles/fonts'
import { Controller, useForm } from 'react-hook-form'
import { blockStyles } from '@styles/block'
import { flexBoxStyles } from '@styles/flexBox'
import ButtonAction from '../components/ButtonAction'
import { style } from '@themes/index'
import { LinearGradient } from 'expo-linear-gradient'



const SignInScreen = () => {

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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const handleShowPassword = () => setShowPassword(!showPassword)
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)
  // #endregion

  return (
    <LinearGradient
      style={[AuthStyles.main]}
      colors={['#1b60de', '#497ee0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
    >
      <View style={styles.title}>
        <Image source={{ uri: 'https://cdn.prod.website-files.com/6642dc4d079fead3f94f5a55/664d91a1c6be636fff0a2f5d_intl-remittance-4.png' }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={[fontStyles.fontButton, styles.titleMain]}>Input Email</Text>
        <Text style={{ color: style.colors.white.text, fontSize: 15 }}>Use your email to register or log in.</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.containerForm}>
          <Controller
            control={control}
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address."
              },
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
    </LinearGradient >
  )
}

export default SignInScreen

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

