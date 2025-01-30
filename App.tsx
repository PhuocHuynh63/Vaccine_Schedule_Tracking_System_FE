
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/navigate/stack.navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation></StackNavigation>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
