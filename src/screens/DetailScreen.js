import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import yelp from '../api/yelp';
import {YellowBox} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }; 
  useEffect(() => {
    getResult(id);
  }, [] );
//show nothing if result not retrieved yet
  if(!result) {
    return null;
  }
  
  return (
  <View>
    <ScrollView>
    <ImageBackground style = {styles.bgImag} source = {require("../../assets/dotz.jpg")}> 
    <Text style={styles.title}>{result.name}</Text>
    <Text style={styles.info}>{result.rating} Stars, {result.review_count} Reviews </Text>
    <Text style={styles.info}>{result.location.address1} {result.location.address2} {result.location.address3}</Text>
    <Text style={styles.info}>{result.location.city}, {result.location.state} {result.location.zip}</Text>
    <Text style={styles.info}>{result.display_phone}</Text>
    <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item }) => {
        return <Image style={styles.image}source={{ uri: item}} />
      }}
    /> 
    </ImageBackground>
  </ScrollView>
  </View>
  );
};
YellowBox.ignoreWarnings(['Warning: ...']);
  console.disableYellowBox = true;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginLeft: 15
  },
  bgImag: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
      
    },
  image: {
      width: 350,
      height: 220,
      borderRadius: 4
  },
  title: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 18, 
      marginTop: 15,
      textAlign: 'center',
  }, 
  info: {
    fontSize: 18
  }
});

export default DetailScreen;
