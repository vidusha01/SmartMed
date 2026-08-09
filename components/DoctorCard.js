import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function DoctorCard({ doctor, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>

      <Text style={styles.name}>👨‍⚕️ {doctor.name}</Text>

      <Text style={styles.specialization}>
        {doctor.specialization}
      </Text>

      <Text style={styles.hospital}>
        🏥 {doctor.hospital}
      </Text>

      <View style={styles.divider} />

      <Text style={styles.viewDetails}>
        Tap to view doctor details →
      </Text>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  specialization: {
    fontSize: 16,
    color: '#2563eb',
    marginTop: 6,
    fontWeight: '600',
  },

  hospital: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 8,
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 12,
  },

  viewDetails: {
    color: '#2563EB',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});