import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/smartmed-logo.png')}
          style={styles.logo}
        />

        <Text style={styles.heading}>Welcome to SmartMed</Text>

        <Text style={styles.subHeading}>
          Your personal healthcare assistant
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            What would you like to do today?
          </Text>

          <PrimaryButton
            title="Find Doctors"
            onPress={() => navigation.navigate('DoctorList')}
          />

          <PrimaryButton
            title="Book Appointment"
            onPress={() => navigation.navigate('Appointment')}
          />

          <PrimaryButton
            title="Medicine Reminder"
            onPress={() => navigation.navigate('MedicineReminder')}
          />

          <PrimaryButton
            title="My Profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>

        <Text style={styles.footer}>
          Manage doctors, appointments and medicine reminders in one place.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eaf2ff',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    width: 190,
    height: 125,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 12,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },

  subHeading: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 28,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 22,
    borderRadius: 18,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f172a',
    marginBottom: 14,
  },

  footer: {
    textAlign: 'center',
    color: '#64748b',
    marginTop: 24,
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 15,
  },
});