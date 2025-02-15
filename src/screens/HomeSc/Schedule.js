import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Schedule() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={{
        backgroundColor:'#4865F3',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SCHEDULE</Text>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A68FF",
    height: 80,
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    fontSize: 30,
    color: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: '25%',
    marginTop: '10%'
  },
  
  
  arrow: {
    fontSize: 18,
    color: "#888",
  },
  input: {
    backgroundColor: "#F3F4F6",
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
    marginTop: 8,
  },
  commentBox: {
    height: 80,
    textAlignVertical: "top",
  },
};
