import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Care Map</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Components")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go To Components</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go To List</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Image")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go To Childcare image details</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go To Search</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
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



export default HomeScreen;
