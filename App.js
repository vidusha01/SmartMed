import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppointmentScreen from './screens/AppointmentScreen';
import DoctorDetailsScreen from './screens/DoctorDetailsScreen';
import DoctorListScreen from './screens/DoctorListScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MedicineReminderScreen from './screens/MedicineReminderScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'SmartMed' }}
        />

        <Stack.Screen
          name="DoctorList"
          component={DoctorListScreen}
          options={{ title: 'Our Doctors' }}
        />

        <Stack.Screen
          name="DoctorDetails"
          component={DoctorDetailsScreen}
          options={{ title: 'Doctor Details' }}
        />

        <Stack.Screen
          name="Appointment"
          component={AppointmentScreen}
          options={{ title: 'Book Appointment' }}
        />

        <Stack.Screen
          name="MedicineReminder"
          component={MedicineReminderScreen}
          options={{ title: 'Medicine Reminder' }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'My Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}