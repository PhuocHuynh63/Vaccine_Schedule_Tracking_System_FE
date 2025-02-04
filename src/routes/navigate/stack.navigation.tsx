import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ServiceProfileScreen from '@screens/ServiceProfile';
import VaccinatorProfile from '@containers/VaccinatorProfile';
import HeaderBooking from '@organisms/Booking/HeaderBooking';
import { ROUTES } from '..';
import AntDesign from '@expo/vector-icons/AntDesign';
import { iconStyles } from '@styles/icon';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ROUTES.LIST_VACCINATOR_PROFILE}
                component={ServiceProfileScreen}
                options={{
                    header: () =>
                        <HeaderBooking
                            children={'Booking'}
                            icon={<AntDesign name="plus" style={iconStyles.icon} />}
                        />
                }}
            />
            <Stack.Screen
                name={ROUTES.VACCINATOR_PROFILE}
                component={VaccinatorProfile}
                options={{
                    header: () =>
                        <HeaderBooking
                            children={'Information on the person vaccinated'}
                            icon={<AntDesign name="edit" style={iconStyles.icon} />}
                        />
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})