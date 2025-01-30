import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components/Atoms/Button'
import { Search } from '../../components/Atoms/Search'
import CardProfile from '../../components/Molecules/CardProfile'

const ServiceProfile = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Search placeholder='Find a vaccinator' />
            <CardProfile />
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