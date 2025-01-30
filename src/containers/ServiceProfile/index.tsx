import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../../components/Button'
import Search from '../../components/Search'

const ServiceProfile = () => {
    return (
        <View style={styles.container}>
            <Search></Search>
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