import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Prodd() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={{
        backgroundColor:'#4865F3',
        height: '17%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CONTACT</Text>
      </View>

      {/* Image Placeholder */}
      <View style={{
        backgroundColor: "#ddd",
        height: 120,
        width: '90%',
        margin: '5%',
        borderRadius: 10
      }} />

      {/* Opinion Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>OPINION</Text>
        <TouchableOpacity style={styles.selectBox}>
          <Text style={styles.selectText}>Select the planned injection center</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Customer Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CUSTOMER INFORMATION</Text>
        <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="#aaa" />
        <TextInput style={[styles.input, styles.commentBox]} placeholder="Customer Comments" placeholderTextColor="#aaa" multiline />
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
  imagePlaceholder: {
    height: 120,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginVertical: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#E1F5FE",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  selectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  selectText: {
    fontSize: 14,
    color: "#555",
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
