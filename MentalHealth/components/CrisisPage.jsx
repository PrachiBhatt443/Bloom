import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import React from 'react'

const CrisisPage = () => {
  const data = [
    { key: '1', number: '1234567890', timings: 'Timings: 24x7', languages: 'Languages: Hindi, Gujrati, English' },
    { key: '2', number: '9876543210', timings: 'Timings: 9am-5pm', languages: 'Languages: English, Spanish' },
    { key: '3', number: '1234567890', timings: 'Timings: 24x7', languages: 'Languages: Hindi, Gujrati, English' },
    { key: '4', number: '1234567890', timings: 'Timings: 24x7', languages: 'Languages: Hindi, Gujrati, English' },
    { key: '5', number: '1234567890', timings: 'Timings: 24x7', languages: 'Languages: Hindi, Gujrati, English' },
    { key: '6', number: '1234567890', timings: 'Timings: 24x7', languages: 'Languages: Hindi, Gujrati, English' },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.box}>
        <View style={styles.head}>
          <Text style={{fontWeight:"800",fontSize:25}}>{item.number}</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={{fontWeight:'700'}}>Call</Text>
            <Icon name="phone" size={20}/>
          </TouchableOpacity>
        </View>
        <Text>{item.timings}</Text>
        <Text>{item.languages}</Text>
      </View>
    );
  };
    
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Icon name="arrow-left" size={30} color="grey" />
        <Text style={styles.title}>DeepMind</Text>
      </View>
      <Text style={{fontSize:30,fontWeight:'450',padding:35}}>Help is a call away</Text>
      <View style={styles.card}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.flatListContent}
        />
       </View>
    </View>
  )
}


export default CrisisPage

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 0,
    marginTop:30,
  },
  box:{
    padding:10,
    borderRadius:10,
    backgroundColor:'#D9D9D9',
    marginBottom:7,
    
  },
  head: {
    flexDirection: 'row',
    gap:100,
  },
  btn:{
    flexDirection: 'row',
    gap:14,
    paddingLeft:12,
    paddingBottom:2,
    paddingTop:4,
    backgroundColor:'white',
    width:90,
    borderRadius:8,
    borderWidth: 2, // Border width of 19
    borderColor: 'black',
    
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight:'bold',
  },
  subtitle: {
    fontSize: 16,
    // marginBottom: 20,
  },
});