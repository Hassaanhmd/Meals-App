import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CatergoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CatergoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({});
