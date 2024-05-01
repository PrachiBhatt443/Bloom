import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Page1=()=> {
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>DeepMind</Text>
        <Image source={require('../assets/zebra.png')} 
        style={styles.iconimage} />
        <Text style={styles.text2}>Hello, I am Zebra</Text>
        <Text style={styles.text3}>I am your friend in this app  blah blah blah blah blah blah blah blah blah </Text>
        <Text style={styles.text4}>How do you want me to help with?</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle urgent crisis
        }}
      >
        <Text style={styles.rbuttonText}>I'm in a urgent Crisis!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle non-urgent situation
        }}>
        <Text style={styles.wbuttonText}>It's not urgent</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', // Aligns items vertically in the center
        alignItems: 'center',     // Aligns items horizontally in the center
      },
      text1:{
        marginTop:70,
        marginBottom:60,
        fontSize: 28,
        fontWeight:'500',
      },
      text2:{
        marginTop:30,
        fontSize: 38,
        fontWeight:'800',
      },
      text3: {
        fontSize: 19,
        textAlign: 'center',
        margin:20,
      },
      text4: {
        fontSize: 22,
        fontWeight:'800',
        marginTop:80,
        marginBottom:40,
      },
      iconimage:{
        alignSelf:'center',
        backgroundColor:'black',
        width:110,
        height:120,
        borderRadius:55,
      },
      button:{
        width:280,
        justifyContent: 'center',
        margin:8,
        borderRadius:90,
      },
      rbuttonText: {
        backgroundColor:'#ED2939',
        borderRadius:10,
        padding:10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
      },
      wbuttonText: {
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 16,
        padding:10,
        fontWeight: 'bold',
        color: 'black',
        borderRadius:10,
        backgroundColor: 'white',
        textAlign: 'center',
      },
});
export default Page1;
    