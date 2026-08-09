import { Alert, StyleSheet, Text, View } from 'react-native';

import InfoRow from './InfoRow';
import PrimaryButton from './PrimaryButton';

export default function ProfileCard({ patient }) {
  const handleEdit = () => {
    Alert.alert(
      'Edit Profile',
      'Profile editing will be available in the next version.'
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {patient.initials}
        </Text>
      </View>

      <Text style={styles.name}>{patient.name}</Text>

      <Text style={styles.role}>SmartMed Patient</Text>

      <View style={styles.divider} />

      <InfoRow label="Patient ID:" value={patient.patientId} />

      <InfoRow label="Email:" value={patient.email} />

      <InfoRow label="Phone:" value={patient.phone} />

      <InfoRow label="Blood Group:" value={patient.bloodGroup} />

      <InfoRow label="Date of Birth:" value={patient.dateOfBirth} />

      <View style={styles.divider} />

      <Text style={styles.note}>
        Keep your contact and medical information updated for better
        healthcare support.
      </Text>

      <PrimaryButton
        title="Edit Profile"
        onPress={handleEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 18,
    elevation: 5,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },

  avatarText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f172a',
  },

  role: {
    fontSize: 16,
    textAlign: 'center',
    color: '#64748b',
    marginTop: 5,
  },

  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 20,
  },

  note: {
    textAlign: 'center',
    color: '#475569',
    lineHeight: 22,
  },
});