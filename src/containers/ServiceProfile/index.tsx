import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../../components/Atoms/Search'
import { Button } from '../../components/Atoms/Button'


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