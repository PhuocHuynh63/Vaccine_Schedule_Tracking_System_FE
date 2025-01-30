import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ServiceProfileScreen from '../../screens/ServiceProfile';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Booking" component={ServiceProfileScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})