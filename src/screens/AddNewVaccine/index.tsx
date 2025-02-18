import React, { useState } from 'react';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'src/types/INavigates';
import { ROUTES } from '@routes/index';
import VaccineCard from '@molecules/VaccineCard';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Button } from '@atoms/Button';
import { style } from '@themes/index';
import { fontStyles } from '@styles/fonts';

const vaccineData = Array.from({ length: 10 }, (_, index) => ({
  id: index.toString(),
  name: `Vaccine ${index + 1}`,
}));

const AddNewVaccine = () => {
  const route = useRoute<RouteProp<RootStackParamList, ROUTES.VACCINATOR_PROFILE>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { userId: user } = route.params;
  
  // State to track selected vaccines
  const [selectedVaccines, setSelectedVaccines] = useState<string[]>([]);
  
  const toggleVaccineSelection = (id: string) => {
    setSelectedVaccines(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(vaccineId => vaccineId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };
  
  const navigateToVaccinationInfo = () => {
    if (selectedVaccines.length > 0) {
      navigation.navigate(ROUTES.VACCINATION_INFO, { 
        users: [{ userId: user }],
        selectedVaccines 
      });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={vaccineData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VaccineCard
            isSelected={selectedVaccines.includes(item.id)}
            onPress={() => toggleVaccineSelection(item.id)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={navigateToVaccinationInfo}>
          <Text style={[fontStyles.fontButton]}>
            Confirm {selectedVaccines.length > 0 ? `(${selectedVaccines.length})` : ''}
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default AddNewVaccine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    paddingBottom: 80, // More space to avoid button overlap
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: style.sizes.padding.p_10,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
});