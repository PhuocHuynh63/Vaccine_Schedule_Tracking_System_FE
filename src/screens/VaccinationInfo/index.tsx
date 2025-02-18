import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/core';
import { RootStackParamList } from 'src/types/INavigates';
import { ROUTES } from '@routes/index';
import VaccinationInfoBox from '@organisms/Booking/VaccinationInfoBox';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const VaccinationInfo = () => {
    const route = useRoute<RouteProp<RootStackParamList, ROUTES.VACCINATION_INFO>>();

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <View style={styles.container}>
                    <VaccinationInfoBox />
                </View>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
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