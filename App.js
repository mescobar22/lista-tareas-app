import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <AddTask/>
      <Tasks/>
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});