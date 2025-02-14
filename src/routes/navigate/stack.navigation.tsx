import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '..';
import AntDesign from '@expo/vector-icons/AntDesign';
import { iconStyles } from '@styles/icon';
import HeaderBooking from '@organisms/Booking/HeaderBooking';
import VaccinatorProfile from '@screens/VaccinatorProfile';
import ListVaccinatorProfile from '@screens/ServiceProfile';
import VaccinationInfo from '@screens/VaccinationInfo';
import ChooseAuthenScreen from '@screens/ChooseAuthen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ROUTES.CHOOSE_AUTHEN}
                component={ChooseAuthenScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES.LIST_VACCINATOR_PROFILE}
                component={ListVaccinatorProfile}
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
            <Stack.Screen
                name={ROUTES.VACCINATION_INFO}
                component={VaccinationInfo}
                options={{
                    header: () =>
                        <HeaderBooking
                            children={'Information about the person being vaccinated'}
                            icon={<AntDesign name="edit" style={iconStyles.icon} />}
                        />
                }}
            />

        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})