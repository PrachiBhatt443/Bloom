import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page1 from './components/Page1';
import CrisisPage from './components/CrisisPage'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Page1/> */}
      <CrisisPage/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: ,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});