import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Button } from '../../components/Atoms/Button'
import { Search } from '../../components/Atoms/Search'
import CardProfile from '../../components/Molecules/CardProfile'
import { RootStackParamList } from '../../types/INavigates'
import { ROUTES } from '../../routes'

const ServiceProfile = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
            <Search placeholder='Find a vaccinator' />
            <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
            <Button>Add service profile</Button>
        </View>
    )
}

export default ServiceProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})