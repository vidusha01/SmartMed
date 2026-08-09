import { useState } from 'react';

import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function MedicineReminderScreen() {
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [reminder, setReminder] = useState(null);

  const addReminder = () => {
    if (
      medicineName === '' ||
      dosage === '' ||
      reminderTime === ''
    ) {
      Alert.alert(
        'Missing Information',
        'Please complete all medicine details.'
      );
    } else {
      const newReminder = {
        medicineName: medicineName,
        dosage: dosage,
        reminderTime: reminderTime,
      };

      setReminder(newReminder);

      Alert.alert(
        'Reminder Added',
        `Reminder created for ${medicineName}.`
      );

      setMedicineName('');
      setDosage('');
      setReminderTime('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Medicine Reminder</Text>

          <Text style={styles.description}>
            Add a reminder so you do not miss your medicine.
          </Text>

          <InputField
            label="Medicine Name"
            placeholder="Example: Paracetamol"
            value={medicineName}
            onChangeText={setMedicineName}
          />

          <InputField
            label="Dosage"
            placeholder="Example: One tablet"
            value={dosage}
            onChangeText={setDosage}
          />

          <InputField
            label="Reminder Time"
            placeholder="Example: 8:00 PM"
            value={reminderTime}
            onChangeText={setReminderTime}
          />

          <PrimaryButton
            title="Add Reminder"
            onPress={addReminder}
          />
        </View>

        {reminder && (
          <View style={styles.reminderCard}>
            <Text style={styles.reminderTitle}>
              Current Reminder
            </Text>

            <Text style={styles.reminderText}>
              Medicine: {reminder.medicineName}
            </Text>

            <Text style={styles.reminderText}>
              Dosage: {reminder.dosage}
            </Text>

            <Text style={styles.reminderText}>
              Time: {reminder.reminderTime}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eaf2ff',
  },

  container: {
    flexGrow: 1,
    padding: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 22,
    borderRadius: 18,
    elevation: 5,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f172a',
  },

  description: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 7,
    marginBottom: 24,
  },

  reminderCard: {
    backgroundColor: '#dbeafe',
    padding: 18,
    borderRadius: 14,
    marginTop: 20,
  },

  reminderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 10,
  },

  reminderText: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 6,
  },
});