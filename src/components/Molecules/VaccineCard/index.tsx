import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { style } from '@themes/index';
import { IComponents } from 'src/types/IComponents';
import Vaccine from '@atoms/Vaccine';

interface VaccineCardProps {
  onPress: () => void;
  isSelected: boolean;
}

const VaccineCard = ({ onPress, isSelected }: VaccineCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        {/* Ảnh vaccine */}
        <Vaccine />

        {/* Thông tin */}
        <View style={styles.textContainer}>
          <Text style={styles.name}>VẮC XIN SHINGRIX PHÒNG BỆNH ZONA THẦN KINH</Text>
          <Text style={styles.description}>
            <Text style={styles.bold}>Disease prevention: </Text>
            Zona thần kinh
          </Text>
          <Text style={styles.price}>3,890,000 VNĐ</Text>
        </View>
      </View>

      {/* Nút chọn */}
      <TouchableOpacity 
        style={[
          styles.button, 
          isSelected ? styles.selectedButton : styles.chooseButton
        ]} 
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          {isSelected ? 'Selected' : 'Choose'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VaccineCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    color: '#555',
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#0056b3',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  chooseButton: {
    backgroundColor: '#0056b3',
  },
  selectedButton: {
    backgroundColor: '#34A853', // Green color for selected state
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});