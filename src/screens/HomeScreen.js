import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
  <View>
    <Text style={styles.text}>Care Map</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate("Components")}>
      <Text>Go To Components</Text>
    </TouchableOpacity>
  <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
      <Text>Go to List</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center'
  }
});

export default HomeScreen;
