import { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert(
        'Missing Information',
        'Please enter your email and password.'
      );
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/smartmed-logo.png')}
          style={styles.logo}
        />

        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back</Text>

          <Text style={styles.description}>
            Sign in to manage appointments, doctors and medicine reminders.
          </Text>

          <InputField
            label="Email Address"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>

          <PrimaryButton
            title="Login"
            onPress={handleLogin}
          />
        </View>

        <Text style={styles.footer}>
          Secure access to your SmartMed account
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
    padding: 24,
  },

  logo: {
    width: 210,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 18,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 22,
    borderRadius: 18,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },

  description: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 7,
    marginBottom: 22,
  },

  forgotPassword: {
    color: '#2563eb',
    textAlign: 'right',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  footer: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: 13,
    marginTop: 24,
  },
});