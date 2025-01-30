import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/INavigates';
import { ROUTES } from '../../routes';

const VaccinatorProfile = () => {
    const route = useRoute<RouteProp<RootStackParamList, ROUTES.VACCINATOR_PROFILE>>();

    return (
        <View>
            <Text>VaccinatorProfile</Text>
        </View>
    )
}

export default VaccinatorProfile

const styles = StyleSheet.create({})