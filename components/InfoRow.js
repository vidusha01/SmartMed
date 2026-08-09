import { StyleSheet, Text, View } from 'react-native';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  label: {
    width: 120,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  value: {
    flex: 1,
    color: '#475569',
  },
});