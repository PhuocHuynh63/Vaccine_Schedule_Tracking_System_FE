import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ServiceProfileScreen from '../../screens/ServiceProfile';
import HeaderBooking from '../../components/Organisms/Booking/HeaderBooking';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Booking"
                component={ServiceProfileScreen}
                options={{ header: () => <HeaderBooking children={'Booking'} /> }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})