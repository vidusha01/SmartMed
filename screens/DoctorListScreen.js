import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import DoctorCard from '../components/DoctorCard';
import doctors from '../data/doctors';

export default function DoctorListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Our Doctors</Text>

        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DoctorCard
              doctor={item}
              onPress={() =>
                navigation.navigate('DoctorDetails', {
                  doctor: item,
                })
              }
            />
          )}
        />
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
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0f172a',
  },
});