
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

const services = [
  { icon: '🩺', name: 'Online Doctor', detail: 'Consult doctors online' },
  { icon: '💊', name: 'Order Medicines', detail: 'Order with prescription' },
  { icon: '🧪', name: 'Blood Tests', detail: 'Book lab tests at home' },
  { icon: '📁', name: 'Medical Records', detail: 'Store reports securely' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#087F8C" barStyle="light-content" />

      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.logo}>❤️ MediCare</Text>
          <Text style={styles.welcome}>Your Health, Our Priority</Text>
          <Text style={styles.greeting}>Hello, Welcome!</Text>
          <Text style={styles.subtitle}>
            Healthcare made simple and accessible.
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.heading}>Our Services</Text>

          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {}}
            >
              <Text style={styles.icon}>{service.icon}</Text>
              <View>
                <Text style={styles.cardTitle}>{service.name}</Text>
                <Text style={styles.detail}>{service.detail}</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.records}>
            <Text style={styles.recordsTitle}>Your Health Records</Text>
            <Text style={styles.detail}>
              Keep your prescriptions and reports
              safely in one place.
            </Text>
          </View>

          <Text style={styles.footer}>MediCare © 2026</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FA',
  },
  header: {
    backgroundColor: '#087F8C',
    padding: 28,
    paddingTop: 55,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: 'bold',
  },
  welcome: {
    color: '#D8F5F5',
    marginTop: 5,
    fontSize: 15,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 35,
  },
  subtitle: {
    color: '#FFFFFF',
    marginTop: 8,
    fontSize: 14,
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#173D46',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  icon: {
    fontSize: 30,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#173D46',
  },
  detail: {
    color: '#71838A',
    fontSize: 13,
    marginTop: 5,
  },
  arrow: {
    marginLeft: 'auto',
    fontSize: 27,
    color: '#087F8C',
  },
  records: {
    backgroundColor: '#DDF2F1',
    padding: 20,
    borderRadius: 15,
    marginTop: 12,
  },
  recordsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#087F8C',
    marginBottom: 8,
  },
  footer: {
    textAlign: 'center',
    color: '#71838A',
    marginTop: 28,
    marginBottom: 20,
  },
});
