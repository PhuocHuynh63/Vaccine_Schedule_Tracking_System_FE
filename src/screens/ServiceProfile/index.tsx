import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from 'src/types/INavigates'
import { ROUTES } from '@routes/index'
import { Search } from '@atoms/Search'
import CardProfile from '@molecules/CardProfile'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'
import { Button } from '@atoms/Button'
import { style } from '@themes/index'

const ListVaccinatorProfile = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
            <Search placeholder='Find a vaccinator' />

            <ScrollView>
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
                <CardProfile onPress={() => navigation.navigate(ROUTES.VACCINATOR_PROFILE, { userId: '123' })} />
            </ScrollView>

            <View style={styles.buttonContainer}>
                <Button title='Add service profile' />
            </View>
        </View>
    )
}

export default ListVaccinatorProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    blockInfo: {
    },
    buttonContainer: {
        boxShadow: '0px -1px 4px rgba(0, 0, 0, 0.25)',
        paddingVertical: style.sizes.padding.p_10,
    }
})