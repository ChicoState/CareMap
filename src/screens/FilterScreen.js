import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const FilterScreen = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Search", {text: 'childcare'})}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Day Care Centers</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Search", {text: 'preschool'})}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Preschools</Text>
          </View>     
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Search", {text: 'afterschool'})}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>School Age Programs</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Search", {text: 'montessori'})}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Montessori</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
};

FilterScreen.navigationOptions = ({navigation}) => {
  return {
      headerRight: <TouchableOpacity onPress={() => navigation.navigate('Components')}>
          <FontAwesome name = "child" size={37} style={{color: '#ffdd59', right: 1}}/>
          </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#f64b2f'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'black'
  }
});

/*
var options = {
enableHighAccuracy: true,
timeout: 5000,
maximumAge: 0
};

function success(pos){
  var crd = pos.coords;

  console.log('Your current positon is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err)
{
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
*/

export default FilterScreen;
