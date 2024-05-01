import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page1 from './components/Page1';

export default function App() {
  return (
    <View style={styles.container}>
      <Page1/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
