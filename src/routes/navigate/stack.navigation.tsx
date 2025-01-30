import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ServiceProfileScreen from '../../screens/ServiceProfile';
import HeaderBooking from '../../components/Organisms/Booking/HeaderBooking';
import VaccinatorProfile from '../../containers/VaccinatorProfile';
import { ROUTES } from '..';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ROUTES.LIST_VACCINATOR_PROFILE}
                component={ServiceProfileScreen}
                options={{ header: () => <HeaderBooking children={'Booking'} /> }}
            />
            <Stack.Screen
                name={ROUTES.VACCINATOR_PROFILE}
                component={VaccinatorProfile}
                options={{ header: () => <HeaderBooking children={'Information on the person vaccinated'} /> }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})