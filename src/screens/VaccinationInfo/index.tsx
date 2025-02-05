import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/core';
import { RootStackParamList } from 'src/types/INavigates';
import { ROUTES } from '@routes/index';
import VaccinationInfoBox from '@organisms/Booking/VaccinationInfoBox';

const VaccinationInfo = () => {
    const route = useRoute<RouteProp<RootStackParamList, ROUTES.VACCINATION_INFO>>();

    return (
        <View style={styles.container}>
            <VaccinationInfoBox />
        </View>
    )
}

export default VaccinationInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxInfo: {

    }
})