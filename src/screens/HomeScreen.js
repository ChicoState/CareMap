import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Care Map</Text>
      <Button onPress={() => props.navigation.navigate("Components")}>
        <Text>Go To Components</Text>
      </Button>
      <Button onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List</Text>
      </Button>
      <Button onPress={() => props.navigation.navigate("Image")}>
        <Text>Go to Childcare image detail</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center"
  }
});

export default HomeScreen;
