import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Platform,
  Alert,
} from 'react-native';
// import { StyleSheet, Image, Platform, Button, Alert, View } from 'react-native';
import RNFS from 'react-native-fs'; // Install react-native-fs
import XLSX from 'xlsx'; // Install xlsx
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import * as FileSystem from 'expo-file-system';
// import * as Sharing from 'expo-sharing';

export default function TabTwoScreen() {
  // const handleExportReport = async () => {
  //   // Dummy data for the Excel file
  //   const dummyData = [
  //     { Location: 'New York', Delivered: 'Yes', Status: 'Completed' },
  //     { Location: 'Los Angeles', Delivered: 'No', Status: 'Pending' },
  //     { Location: 'Chicago', Delivered: 'Yes', Status: 'Completed' },
  //   ];

  //   // Convert the data to a worksheet
  //   const worksheet = XLSX.utils.json_to_sheet(dummyData);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

  //   // Write the workbook to a binary string
  //   const excelData = XLSX.write(workbook, { type: 'binary', bookType: 'xlsx' });

  //   // Create a buffer for the binary string
  //   const buffer = new Uint8Array(
  //     excelData.split('').map((char) => char.charCodeAt(0))
  //   );

  //   // Create a temporary file in the FileSystem
  //   const fileUri = FileSystem.cacheDirectory + 'Report.xlsx';

  //   try {
  //     await FileSystem.writeAsStringAsync(fileUri, buffer, {
  //       encoding: FileSystem.EncodingType.Base64,
  //     });

  //     // Share the file using Expo Sharing
  //     if (Platform.OS === 'web') {
  //       Alert.alert('Download is not supported on web!');
  //     } else if (await Sharing.isAvailableAsync()) {
  //       await Sharing.shareAsync(fileUri);
  //     } else {
  //       Alert.alert('Sharing is not available on this platform');
  //     }
  //   } catch (error) {
  //     Alert.alert('Error', 'An error occurred while generating the report.');
  //   }
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Report</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          placeholder="1/2/2025 - 10/2/2025"
          editable={true}
        />

        <Text style={styles.label}>Project</Text>
        <TextInput style={styles.input} placeholder="All" editable={true} />

        <Text style={styles.label}>HOTO</Text>
        <TextInput style={styles.input} placeholder="All" editable={true} />

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>WTG</Text>
            <Text style={styles.tableHeaderText}>Location</Text>
            <Text style={styles.tableHeaderText}>Delivered</Text>
            <Text style={styles.tableHeaderText}>Status</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>New York</Text>
            <Text style={styles.tableCell}>Yes</Text>
            <Text style={styles.tableCell}>Completed</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>2</Text>
            <Text style={styles.tableCell}>Los Angeles</Text>
            <Text style={styles.tableCell}>No</Text>
            <Text style={styles.tableCell}>Pending</Text>
          </View>
        </View>

        <Button title="Export Report" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  formContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  table: {
    marginVertical: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 5,
  },
  tableCell: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
});