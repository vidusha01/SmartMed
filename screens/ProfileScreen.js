import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';

import ProfileCard from '../components/ProfileCard';

export default function ProfileScreen() {
  const patient = {
    name: 'Vidusha Shalani',
    initials: 'VS',
    patientId: 'PT2026001',
    email: 'vidusha00000@email.com',
    phone: '071 2346846',
    bloodGroup: 'O Positive',
    dateOfBirth: '26 March 2001',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileCard patient={patient} />
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
});