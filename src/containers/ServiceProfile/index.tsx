import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../../components/Atoms/Button'
import { Search } from '../../components/Atoms/Search'


const ServiceProfile = () => {
    return (
        <View style={styles.container}>
            <Search placeholder='Find a vaccinator' />
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