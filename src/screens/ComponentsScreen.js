import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = "Jordan";
  return (
    <View>
      <Text style={styles.headerTextStyle}>Care Map</Text>
      <Text style={styles.subHeaderTextStyle}>This is the Care Map components screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 45
  },
  subHeaderTextStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
