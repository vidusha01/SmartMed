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

export default function AppointmentScreen({ route }) {
  const selectedDoctor = route.params?.doctorName || '';

  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState(selectedDoctor);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleBooking = () => {
    if (
      patientName === '' ||
      doctorName === '' ||
      appointmentDate === '' ||
      appointmentTime === ''
    ) {
      Alert.alert(
        'Missing Information',
        'Please complete all appointment details.'
      );
    } else {
      Alert.alert(
        'Appointment Confirmed',
        `Your appointment with ${doctorName} has been booked for ${appointmentDate} at ${appointmentTime}.`
      );

      setPatientName('');
      setDoctorName('');
      setAppointmentDate('');
      setAppointmentTime('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Book an Appointment</Text>

          <Text style={styles.description}>
            Enter your details and preferred consultation time.
          </Text>

          <InputField
            label="Patient Name"
            placeholder="Enter patient name"
            value={patientName}
            onChangeText={setPatientName}
          />

          <InputField
            label="Doctor Name"
            placeholder="Enter doctor name"
            value={doctorName}
            onChangeText={setDoctorName}
          />

          <InputField
            label="Appointment Date"
            placeholder="Example: 20 August 2026"
            value={appointmentDate}
            onChangeText={setAppointmentDate}
          />

          <InputField
            label="Appointment Time"
            placeholder="Example: 10:30 AM"
            value={appointmentTime}
            onChangeText={setAppointmentTime}
          />

          <PrimaryButton
            title="Confirm Appointment"
            onPress={handleBooking}
          />
        </View>
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
    justifyContent: 'center',
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
});