import { Pressable, StyleSheet, Text } from 'react-native';

export default function PrimaryButton({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});