import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';

export default function DoctorDetailsScreen({
  route,
  navigation,
}) {
  const { doctor } = route.params;

  const bookAppointment = () => {
    navigation.navigate('Appointment', {
      doctorName: doctor.name,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👨‍⚕️</Text>
          </View>

          <Text style={styles.name}>{doctor.name}</Text>

          <Text style={styles.specialization}>
            {doctor.specialization}
          </Text>

          <Text style={styles.hospitalName}>
            {doctor.hospital}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>
            Consultation Information
          </Text>

          <InfoRow
            label="Experience:"
            value={doctor.experience}
          />

          <InfoRow
            label="Available:"
            value={doctor.availableDays}
          />

          <InfoRow
            label="Time:"
            value={doctor.availableTime}
          />

          <InfoRow
            label="Fee:"
            value={doctor.fee}
          />

          <View style={styles.divider} />

          <Text style={styles.aboutTitle}>About Doctor</Text>

          <Text style={styles.description}>
            {doctor.description}
          </Text>

          <PrimaryButton
            title="Book Appointment"
            onPress={bookAppointment}
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
    padding: 24,
    borderRadius: 18,
    elevation: 5,
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },

  avatarText: {
    fontSize: 48,
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f172a',
  },

  specialization: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2563eb',
    fontWeight: 'bold',
    marginTop: 5,
  },

  hospitalName: {
    fontSize: 14,
    textAlign: 'center',
    color: '#64748b',
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
  },

  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },
});