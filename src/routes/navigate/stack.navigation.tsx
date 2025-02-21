import { StyleSheet } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceProfileScreen from '../../screens/ServiceProfile';
import BottomTabNavigator from './bottomTab.navigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
      <Stack.Navigator>
      {/* Màn hình chính sẽ là BottomTabNavigator */}
      <Stack.Screen 
        name="Main" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }} 
      />

      {/* Màn hình khác ví dụ */}
      <Stack.Screen name="Details" component={ServiceProfileScreen} />
    </Stack.Navigator>
    )
}
export default StackNavigation

const styles = StyleSheet.create({})