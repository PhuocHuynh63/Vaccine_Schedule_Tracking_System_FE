import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomTab.navigation';
import DetailsScreen from '../../screens/DetailsScreen.js'; // Một màn hình chi tiết ví dụ

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      {/* Màn hình chính sẽ là BottomTabNavigator */}
      <Stack.Screen 
        name="Main" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }} 
      />
      
      {/* Màn hình khác ví dụ */}
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
