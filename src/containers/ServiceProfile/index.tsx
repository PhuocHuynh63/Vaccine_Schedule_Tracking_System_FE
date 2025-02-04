import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from 'src/types/INavigates'
import { ROUTES } from '@routes/index'
import { Search } from '@atoms/Search'
import CardProfile from '@molecules/CardProfile'

const ServiceProfile = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
            <Search placeholder='Find a vaccinator' />
            <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
        </View>
    )
}

export default ServiceProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})