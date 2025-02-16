import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AuthStyles } from '@styles/auth'
import { fontStyles } from '@styles/fonts'
import { Controller, useForm } from 'react-hook-form'

const RegisterScreen = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <View style={[AuthStyles.main]}>
      <View style={styles.title}>
        <Text style={[fontStyles.fontButton, styles.titleMain]}>Let's get started!</Text>
        <Text style={{ fontWeight: '600', fontSize: 15 }}>Create your account!</Text>
      </View>

      {/* Form */}
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={[]}
            />
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={[]}
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={[]}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && <Text>This is required.</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 23
  },
  titleMain: {
    fontSize: 30,
  }
})